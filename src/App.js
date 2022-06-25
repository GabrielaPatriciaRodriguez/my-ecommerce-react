import React from "react";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Views
import Home from "./components/Views/Home/Home";
import Zapatillas from "./components/Views/Zapatillas/Zapatillas";
import Remeras from "./components/Views/Remeras/Remeras";
import Pantalones from "./components/Views/Pantalones/Pantalones";

//Components

import Navigation from "./components/Navigation/Navigation";

// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {

  return (
    <Router>  
    <div className="App">
      <Navigation />

      {/* <div>
        <ItemListContainer />
      </div> */}

      {/* <div>
        <ItemDetailContainer />
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Zapatillas" element={<Zapatillas/>} />
        <Route path="/Remeras" element={<Remeras />} />
        <Route path="/Pantalones" element={<Pantalones />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
