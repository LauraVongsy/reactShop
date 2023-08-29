import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "./ProductsContext";
import "../styles/checkout.css";

export default function Checkout() {
  const { panier, TotalPanier, handleDelete, handleAdd } =
    useContext(ProductsContext);

  const total = TotalPanier(panier);

  return (
    <div className="checkout-container">
      <span className="checkout-span">Votre panier</span>
      <div className="checkout-grid">
        {panier?.map((item, index) => (
          <div key={index} className="checkout-item">
            <Link to={`/${item.id}`} key={index}>
              <img src={item.image} alt={item.title} />
            </Link>

            <div>
              <p className="titre">{item.title}</p>
              <p>{item.price}€</p>
            </div>
            <div className="checkout-btn">
              <button id="check-btn" onClick={() => handleDelete(item)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button id="check-btn" onClick={() => handleAdd(item)}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="totalCheckout">{`Total: ${total.toFixed(2)}€`}</div>
    </div>
  );
}
