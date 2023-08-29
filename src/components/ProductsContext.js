import React, { createContext, useState, useEffect } from "react";
import useFetchData from "./useFetchData";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const URL = `https://fakestoreapi.com/products`;

  const [produits, setProduits] = useState([]);
  const [panier, setPanier] = useState([]);
  const { data } = useFetchData(URL);
  const [panierVisible, setPanierVisible] = useState(false);

  const panierView = () => {
    if (panierVisible === false) {
      setPanierVisible(true);
    } else {
      setPanierVisible(false);
    }
  };

  useEffect(() => {
    setProduits(data);
  }, [data]);
  console.log(produits);

  const handleAdd = (product) => {
    const itemInCart = panier.find((item) => item.id === product.id);

    if (itemInCart) {
      const updatedPanier = panier.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setPanier(updatedPanier);
    } else {
      setPanier([...panier, { ...product, quantity: 1 }]);
    }
  };

  const handleDelete = (product) => {
    const updatedPanier = panier
      .map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);

    setPanier(updatedPanier);
  };

  const cartQuantity = () => {
    var qte = 0;
    for (let i = 0; i < panier.length; i++) {
      qte = qte + panier[i].quantity;
    }
    return qte;
  };

  const TotalPanier = (panier) => {
    var total = 0;
    for (let i = 0; i < panier.length; i++) {
      total = total + panier[i].quantity * panier[i].price;
    }
    return total;
  };

  const contextValue = {
    produits,
    handleAdd,
    panier,
    TotalPanier,
    handleDelete,
    panierView,
    cartQuantity,
    panierVisible,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
