import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "./ProductsContext";

import "../styles/productDetail.css";

export default function ProductDetails() {
  const { produits, handleAdd } = useContext(ProductsContext);

  const { id } = useParams();

  const produit = produits.find((p) => p.id === parseInt(id));

  return (
    <div className="product-page">
      <div className="product-container">
        <img className="product-img" src={produit.image} />
        <h2>{produit.title}</h2>
        <p>{produit.description}</p>
        <p className="price">{`Price: ${produit.price}€`}</p>
        <button
          className="add-to-cart"
          onClick={() => {
            handleAdd(produit);
          }}
        >
          Add to cart
        </button>
        <Link className="return-btn" to="/">
          Retour
        </Link>
      </div>
    </div>
  );
}
