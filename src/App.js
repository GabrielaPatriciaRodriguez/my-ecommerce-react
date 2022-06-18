import React from "react";

import "./App.css";

//Components

import Navigation from "./components/Navigation/Navigation";

import ItemCountContainer from "./components/ItemCountContainer/ItemCountContainer";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";





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
      <ItemCountContainer producto={productos[0]} />
      <ItemCountContainer producto={productos[1]} />
      <ItemCountContainer producto={productos[2]} /> 

      <div>
        <ItemListContainer />
      </div>


    </div>
  );
}

export default App;
