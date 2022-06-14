import React from "react";

import "./App.css";

//Components

import Navigation from "./components/Navigation/Navigation";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import CardComponent from "./components/CardComponent/CardComponent";



function App() {
 const productos = [
  {
    name: "producto 1",
    stock: 10,
  },
  {
    name: "producto 2",
    stock: 8,
  },
  {
    name: "producto 3",
    stock: 12,
  }
 ]

  return (
    <div className="App">
      <Navigation />
      <ItemListContainer producto={productos[0]} />
      <ItemListContainer producto={productos[1]} />
      <ItemListContainer producto={productos[2]} />

      <div className="SectionCards">
        <CardComponent
          nameProd="Zapatilla Mujer"
          description="blabalahaudfbsdbfkjdsh"
          img="https://res.cloudinary.com/gabycoderhouse/image/upload/v1654952479/EcommerceReact/pexels-melvin-buezo-2529148_saow29.jpg"
        />
        <CardComponent
          nameProd="Zapatilla Mujer"
          description="blabalahaudfbsdbfkjdsh"
          img="https://res.cloudinary.com/gabycoderhouse/image/upload/v1654952479/EcommerceReact/pexels-melvin-buezo-2529148_saow29.jpg"
        />
        <CardComponent
          nameProd="Zapatilla Mujer"
          description="blabalahaudfbsdbfkjdsh"
          img="https://res.cloudinary.com/gabycoderhouse/image/upload/v1654952479/EcommerceReact/pexels-melvin-buezo-2529148_saow29.jpg"
        />
      </div>

    </div>
  );
}

export default App;
