export type Category = "Nails" | "Makeup" | "Bags";

export interface Product {
  id: number;
  image: string;
  name: string;
  category: Category;
  description: string;
  specification: string;
  rating: number;
  price: number;
  quantity: number;
  featured?: boolean;
}

export interface CartItem {
  productId: number;
  qty: number;
}