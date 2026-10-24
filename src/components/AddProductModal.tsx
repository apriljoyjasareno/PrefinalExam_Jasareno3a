import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { Category } from "../types";
import { useShop } from "../context/ShopContext";
import { MAX_STOCK } from "../utils/format";

interface Props {
  defaultCategory: Category;
  onClose: () => void;
}

export default function AddProductModal({ defaultCategory, onClose }: Props) {
  const { addProduct } = useShop();

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState<Category>(defaultCategory);
  const [description, setDescription] = useState("");
  const [specification, setSpecification] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(String(reader.result));
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (
      !image ||
      !name.trim() ||
      !description.trim() ||
      !specification.trim() ||
      !rating.trim() ||
      !price.trim() ||
      !quantity.trim()
    ) {
      setError("Please fill in all fields (including the product image).");
      return;
    }

    const ratingNum = Number(rating);
    const priceNum = Number(price);
    const qtyNum = Number(quantity);

    if (Number.isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      setError("Rating must be between 1 and 5.");
      return;
    }
    if (Number.isNaN(priceNum) || priceNum <= 0) {
      setError("Price must be greater than 0.");
      return;
    }
    if (!Number.isInteger(qtyNum) || qtyNum < 0 || qtyNum > MAX_STOCK) {
      setError(`Quantity must be a whole number from 0 to ${MAX_STOCK}.`);
      return;
    }

    addProduct({
      image,
      name: name.trim(),
      category,
      description: description.trim(),
      specification: specification.trim(),
      rating: ratingNum,
      price: priceNum,
      quantity: qtyNum,
    });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <form
        className="modal"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <h2>Add New Product</h2>

        <label>
          Feature Image
          <input type="file" accept="image/*" onChange={handleImage} />
        </label>
        {image && <img src={image} alt="preview" className="preview" />}

        <label>
          Product Name
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Category
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
          >
            <option value="Nails">Nails</option>
            <option value="Makeup">Makeup</option>
            <option value="Bags">Bags</option>
          </select>
        </label>

        <label>
          Description
          <textarea
            rows={2}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label>
          Product Specification
          <textarea
            rows={2}
            value={specification}
            onChange={(e) => setSpecification(e.target.value)}
          />
        </label>

        <div className="row-3">
          <label>
            Rating (1-5)
            <input
              type="number"
              step="0.1"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </label>
          <label>
            Price (₱)
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label>
            Quantity (max {MAX_STOCK})
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>
        </div>

        {error && <p className="error">{error}</p>}

        <div className="modal-actions">
          <button type="button" className="btn btn-outline" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}