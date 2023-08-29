import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "./ProductsContext";
import "../styles/cart.css";

export default function Cart() {
  const { panier, TotalPanier, handleDelete, handleAdd } =
    useContext(ProductsContext);

  const total = TotalPanier(panier);
  console.log(`ceci est la panier:${panier}`);
  return (
    <aside>
      <div className="panier-grid">
        {panier?.map((item, index) => (
          <div key={index} className="panier-item">
            <Link to={`/${item.id}`} key={index}>
              <img src={item.image} alt={item.title} />
            </Link>

            <div>
              <p className="titre">{item.title}</p>
              <p>{item.price}</p>
            </div>
            <div className="cart-btn">
              <button id="btn" onClick={() => handleDelete(item)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button id="btn" onClick={() => handleAdd(item)}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="totalCart">{`Total: ${total.toFixed(2)}€`}</div>
      <Link to="/checkout">
        <button className="checkout-btn">Checkout</button>
      </Link>
    </aside>
  );
}
