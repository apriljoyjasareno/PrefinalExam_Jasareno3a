import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import AddProductModal from "../components/AddProductModal";
import { useShop } from "../context/ShopContext";
import type { Category } from "../types";
import { peso } from "../utils/format";

const categories: Category[] = ["Nails", "Makeup", "Bags"];

export default function Home() {
  const { products, inventoryTotal } = useShop();
  const [params, setParams] = useSearchParams();
  const [showModal, setShowModal] = useState(false);

  const rawCategory = params.get("category");
  const selected: Category | "All" = categories.includes(rawCategory as Category)
    ? (rawCategory as Category)
    : "All";

  const featured = products.filter((p) => p.featured);
  const filtered =
    selected === "All" ? products : products.filter((p) => p.category === selected);

  const handleCategory = (value: string) => {
    if (value === "All") setParams({});
    else setParams({ category: value });
  };

  return (
    <>
      <Hero />

      <section className="section">
        <h2 className="section-title">Featured Products</h2>
        <div className="featured-grid">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} compact />
          ))}
        </div>
      </section>

      <section className="section" id="products">
        <div className="list-header">
          <h2 className="section-title">Product List</h2>
          <label className="filter">
            Category:
            <select value={selected} onChange={(e) => handleCategory(e.target.value)}>
              <option value="All">All</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </div>

        {filtered.length === 0 ? (
          <p className="empty">No products in this category yet.</p>
        ) : (
          <div className="product-grid">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}

        <div className="list-footer">
          <p className="grand-total">
            Overall Total of All Products: <strong>{peso(inventoryTotal)}</strong>
          </p>
          <button className="btn" onClick={() => setShowModal(true)}>
            + Add New
          </button>
        </div>
      </section>

      {showModal && (
        <AddProductModal
          defaultCategory={selected === "All" ? "Nails" : selected}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}