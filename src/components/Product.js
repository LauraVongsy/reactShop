import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "./ProductsContext";
import "../styles/products.css";

export default function Product() {
  const { produits, handleAdd } = useContext(ProductsContext);
  const categories = [
    "all products",
    "men's clothing",
    "women's clothing",
    "jewelry",
    "electronics",
  ];
  const [filter, setFilter] = useState("all products"); // Définir "all products" comme valeur par défaut

  const filterArticle =
    filter === "all products"
      ? produits
      : produits.filter((p) => p.category === filter);

  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div className="grid-container">
        <div className="grid">
          {filterArticle.map((p, index) => (
            <div className="grid-item" key={index}>
              <Link to={`/${p.id}`}>
                <img src={p.image} alt={p.title} />
              </Link>
              <p>{p.title}</p>
              <p>{p.price}€</p>
              <button
                onClick={() => {
                  handleAdd(p);
                }}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
