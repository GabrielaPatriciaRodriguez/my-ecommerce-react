import React from "react";

import "./App.css";

import Navigation from "./components/Navigation";

import ItemListContainer from "./components/ItemListContainer";

function App (){
    return (
      <div className="App">
        <Navigation />
        <ItemListContainer greetings="Bienvenidos a mi ecommerce" />
      </div>
    );
}

export default App;
