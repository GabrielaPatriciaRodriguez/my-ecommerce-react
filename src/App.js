
import React from "react";

import "./App.css";

import Navigation from "./components/Navigation";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <h1>Mi tienda Virtual</h1>
        <p>Gabriela P. Rodriguez</p>
      </div>
    );
  }
}

export default App;
