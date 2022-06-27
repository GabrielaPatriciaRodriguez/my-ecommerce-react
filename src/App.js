import React from "react";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Views
import Home from "./Views/Home/Home";
import Category from "./Views/Category/Category";
import DetailProduct from "./Views/DetailProduct/DetailProduct"

//Components

import Navigation from "./components/Navigation/Navigation";


function App() {

  return (
    <Router>  
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:idCategory" element={<Category/>} />
        <Route path="/item/:id" element={<DetailProduct />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
