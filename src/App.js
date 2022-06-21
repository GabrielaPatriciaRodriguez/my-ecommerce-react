import React from "react";

import "./App.css";

//Components

import Navigation from "./components/Navigation/Navigation";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

  return (
    <div className="App">
      <Navigation />

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
