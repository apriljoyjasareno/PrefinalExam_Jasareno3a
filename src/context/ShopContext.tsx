import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { CartItem, Product } from "../types";
import { initialProducts } from "../data/products";

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  inventoryTotal: number;
  addProduct: (data: Omit<Product, "id">) => void;
  addToCart: (productId: number, qty: number) => void;
  buyNow: (productId: number, qty: number) => void;
  setCartQty: (productId: number, qty: number) => void;
  removeFromCart: (productId: number) => void;
  checkout: () => void;
}

const ShopContext = createContext<ShopContextType | null>(null);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addProduct = (data: Omit<Product, "id">) => {
    setProducts((prev) => [
      ...prev,
      { ...data, id: Math.max(0, ...prev.map((p) => p.id)) + 1 },
    ]);
  };

  const addToCart = (productId: number, qty: number) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    setCart((prev) => {
      const existing = prev.find((i) => i.productId === productId);
      const newQty = Math.min((existing?.qty ?? 0) + qty, product.quantity);
      if (existing) {
        return prev.map((i) =>
          i.productId === productId ? { ...i, qty: newQty } : i
        );
      }
      return [...prev, { productId, qty: newQty }];
    });
  };

  // Buy immediately: reduces the stock right away
  const buyNow = (productId: number, qty: number) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    const bought = Math.min(qty, product.quantity);
    const remaining = product.quantity - bought;

    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, quantity: remaining } : p))
    );
    // keep the cart from holding more than what is left in stock
    setCart((prev) =>
      prev
        .map((i) =>
          i.productId === productId ? { ...i, qty: Math.min(i.qty, remaining) } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const setCartQty = (productId: number, qty: number) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    const safeQty = Math.max(1, Math.min(qty, product.quantity));
    setCart((prev) =>
      prev.map((i) => (i.productId === productId ? { ...i, qty: safeQty } : i))
    );
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((i) => i.productId !== productId));
  };

  const checkout = () => {
    setProducts((prev) =>
      prev.map((p) => {
        const item = cart.find((i) => i.productId === p.id);
        return item ? { ...p, quantity: p.quantity - item.qty } : p;
      })
    );
    setCart([]);
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  const cartTotal = cart.reduce((sum, i) => {
    const p = products.find((x) => x.id === i.productId);
    return sum + (p ? p.price * i.qty : 0);
  }, 0);

  const inventoryTotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        cartCount,
        cartTotal,
        inventoryTotal,
        addProduct,
        addToCart,
        buyNow,
        setCartQty,
        removeFromCart,
        checkout,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop(): ShopContextType {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside ShopProvider");
  return ctx;
}