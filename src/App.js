import "./App.css";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import About from "./components/About";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { ProductsContext } from "./components/ProductsContext";

function App() {
  const { panierVisible } = useContext(ProductsContext);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Banner />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Product />} />
          <Route path="/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        {panierVisible === true ? <Cart /> : <div></div>}
      </header>
    </div>
  );
}

export default App;
