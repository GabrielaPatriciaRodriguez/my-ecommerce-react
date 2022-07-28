import React from "react";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Views
import Home from "./Views/Home/Home";
import Category from "./Views/Category/Category";
import DetailProduct from "./Views/DetailProduct/DetailProduct";

//Components
import Navigation from "./components/Navigation/Navigation";
import Cart from "./components/Cart/Cart";
import Formulario from "./components/Formulario/Formulario";

//Contexto
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/item/:id" element={<DetailProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Formulario />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
    
  );
}

export default App;
