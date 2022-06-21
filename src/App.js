import React from "react";

import "./App.css";

//Components

import Navigation from "./components/Navigation/Navigation";

import ItemCountContainer from "./components/ItemCountContainer/ItemCountContainer";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import CardList from "./components/CardList/CardList";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

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
    },
  ];

  return (
    <div className="App">
      <Navigation />
      <ItemCountContainer producto={productos[0]} />
      <ItemCountContainer producto={productos[1]} />
      <ItemCountContainer producto={productos[2]} />

      <div>
        <CardList />
      </div>

      <div>
        <ItemListContainer />
      </div>

      <div>
        <ItemDetailContainer />
      </div>
    </div>
  );
}

export default App;
