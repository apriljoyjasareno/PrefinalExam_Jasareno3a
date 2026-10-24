import { Link } from "react-router-dom";
import type { Product } from "../types";
import { isLowStock, peso, stars } from "../utils/format";

interface Props {
  product: Product;
  compact?: boolean; // smaller card used in Featured Products
}

export default function ProductCard({ product, compact = false }: Props) {
  const low = isLowStock(product.quantity);
  const out = product.quantity === 0;

  return (
    <Link
      to={`/product/${product.id}`}
      className={compact ? "card card-compact" : "card"}
    >
      <div className="card-img">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="card-body">
        <div className="card-tags">
          <span className="tag">{product.category}</span>
          {out && <span className="badge badge-out">Out of Stock</span>}
          {low && <span className="badge badge-low">Low Stock</span>}
        </div>
        <h3>{product.name}</h3>
        <div className="stars">
          {stars(product.rating)} <small>({product.rating}.0)</small>
        </div>
        <p className="price">{peso(product.price)}</p>

        {!compact && (
          <div className="card-meta">
            <span>Qty: {product.quantity}</span>
            <span>Subtotal: {peso(product.price * product.quantity)}</span>
          </div>
        )}
      </div>
    </Link>
  );
}