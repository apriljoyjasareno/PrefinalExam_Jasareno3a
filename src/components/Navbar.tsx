import { Link, NavLink } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function Navbar() {
  const { cartCount } = useShop();

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        ✨ Glam Girlie
      </Link>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/?category=Nails">Nails</NavLink>
        <NavLink to="/?category=Makeup">Makeup</NavLink>
        <NavLink to="/?category=Bags">Bags</NavLink>
      </nav>

      <Link to="/cart" className="cart-btn">
        🛍 Cart ({cartCount})
      </Link>
    </header>
  );
}