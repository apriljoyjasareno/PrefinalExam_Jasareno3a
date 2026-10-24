import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { isLowStock, peso, stars } from "../utils/format";

export default function ProductDetail() {
  const { id } = useParams();
  const { products, addToCart, buyNow } = useShop();
  const [qty, setQty] = useState(1);
  const [message, setMessage] = useState("");

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="section">
        <p className="empty">Product not found.</p>
        <Link to="/" className="btn">
          Back to shop
        </Link>
      </div>
    );
  }

  const out = product.quantity === 0;
  const low = isLowStock(product.quantity);
  const safeQty = Math.min(qty, Math.max(product.quantity, 1));

  const showMessage = (text: string) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 2500);
  };

  const handleAdd = () => {
    addToCart(product.id, safeQty);
    showMessage("Added to your cart ✓");
  };

  const handleBuy = () => {
    buyNow(product.id, safeQty);
    showMessage(`You bought ${safeQty} item(s)! Thank you 💖`);
    setQty(1);
  };

  return (
    <div className="section detail">
      <Link to="/" className="back">
        ← Back to shop
      </Link>

      <div className="detail-grid">
        <img src={product.image} alt={product.name} className="detail-img" />

        <div className="detail-info">
          <span className="tag">{product.category}</span>
          <h1>{product.name}</h1>
          <div className="stars big">
            {stars(product.rating)} <small>({product.rating}.0)</small>
          </div>
          <p className="price big">{peso(product.price)}</p>

          <p className="stock-line">
            Stock: <strong>{product.quantity}</strong>{" "}
            {out && <span className="badge badge-out inline">Out of Stock</span>}
            {low && <span className="badge badge-low inline">Low Stock</span>}
          </p>

          <p>{product.description}</p>
          <p className="spec">
            <strong>Specifications:</strong> {product.specification}
          </p>

          {out ? (
            <p className="error">Sorry, this item is currently unavailable.</p>
          ) : (
            <>
              <div className="qty-box">
                <button
                  className="qty-btn"
                  onClick={() => setQty(Math.max(1, safeQty - 1))}
                >
                  −
                </button>
                <span className="qty-num">{safeQty}</span>
                <button
                  className="qty-btn"
                  onClick={() => setQty(Math.min(product.quantity, safeQty + 1))}
                >
                  +
                </button>
              </div>

              <p className="total-line">
                Total: <strong>{peso(product.price * safeQty)}</strong>
              </p>

              <div className="detail-actions">
                <button className="btn btn-outline" onClick={handleAdd}>
                  Add to Cart
                </button>
                <button className="btn" onClick={handleBuy}>
                  Buy Now
                </button>
              </div>
            </>
          )}

          {message && <p className="success">{message}</p>}
        </div>
      </div>
    </div>
  );
}