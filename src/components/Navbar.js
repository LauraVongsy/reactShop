import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "./ProductsContext";

import "../styles/navbar.css";

export default function Navbar() {
  const { panier, panierView, cartQuantity } = useContext(ProductsContext);

  return (
    <>
      <div className="navbar-container">
        <div className="nav-links-container">
          <div className="nav-links">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-links">
            <Link to="/about">About</Link>
          </div>
          <div className="nav-links">
            <Link to="/">Shop</Link>
          </div>
        </div>

        <button onClick={panierView} className="nav-btn">
          <img src="cart-shopping-solid.svg" />
          <p>Cart</p>
          <span className="badge">{cartQuantity()}</span>
        </button>
      </div>
    </>
  );
}
