import { useState } from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { peso } from "../utils/format";

export default function Cart() {
  const { cart, products, cartTotal, setCartQty, removeFromCart, checkout } = useShop();
  const [done, setDone] = useState(false);

  const handleCheckout = () => {
    checkout();
    setDone(true);
  };

  if (done) {
    return (
      <div className="section center">
        <h2>Thank you for your order! 💖</h2>
        <Link to="/" className="btn">
          Continue shopping
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="section center">
        <h2>Your cart is empty 🛍</h2>
        <Link to="/" className="btn">
          Start shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="section">
      <h2 className="section-title">Your Cart</h2>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            const p = products.find((x) => x.id === item.productId);
            if (!p) return null;
            return (
              <tr key={item.productId}>
                <td>
                  <div className="cart-product">
                    <img src={p.image} alt={p.name} />
                    <span>{p.name}</span>
                  </div>
                </td>
                <td>{peso(p.price)}</td>
                <td>
                  <div className="qty-box small">
                    <button
                      className="qty-btn"
                      onClick={() => setCartQty(p.id, item.qty - 1)}
                    >
                      −
                    </button>
                    <span className="qty-num">{item.qty}</span>
                    <button
                      className="qty-btn"
                      onClick={() => setCartQty(p.id, item.qty + 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>{peso(p.price * item.qty)}</td>
                <td>
                  <button className="link-btn" onClick={() => removeFromCart(p.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="cart-footer">
        <p className="grand-total">
          Total: <strong>{peso(cartTotal)}</strong>
        </p>
        <button className="btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}