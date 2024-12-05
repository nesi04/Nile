import React from "react";
import "./App.css"
import NavBar from "./components/homepage/navBar";
import ProductList from "./components/product/productList";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import Special from "./components/special/special";

const App = () => {
  return (
    <Router>
    <NavBar></NavBar>
    <div className="app">
      <Routes>
        <Route path="/" element={<ProductList></ProductList>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/special" element={<Special/>}/>
      </Routes>
    </div>
    </Router>
  );
};

export default App;
