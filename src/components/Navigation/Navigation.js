import "./Navigation.css";

import { Link } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";


const Navigation = () => {
  return (
    <nav>
      <ul>
        <Link to="/" className="li">Home</Link>
        <Link to="/Category/Zapatillas" className="li">Zapatillas</Link>
        <Link to="/Category/Remeras" className="li">Remeras</Link>
        <Link to="/Category/Pantalones" className="li">Pantalones</Link>
      </ul>
      <div>
      <CartWidget />
      </div>
    </nav>
  );
};

export default Navigation;
