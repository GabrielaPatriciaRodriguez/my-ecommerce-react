import React from "react";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Views
import Home from "./Views/Home/Home";
import Zapatillas from "./Views/Zapatillas/Zapatillas";
import Remeras from "./Views/Remeras/Remeras";
import Pantalones from "./Views/Pantalones/Pantalones";
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
        <Route path="/Zapatillas" element={<Zapatillas/>} />
        <Route path="/Remeras" element={<Remeras />} />
        <Route path="/Pantalones" element={<Pantalones />} />
        <Route path="/DetailProduct/:id" element={<DetailProduct />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
