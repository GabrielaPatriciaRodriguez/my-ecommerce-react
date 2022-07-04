import "./Navigation.css";

import { Link } from "react-router-dom";

import Cart from "../Cart/Cart";

const Navigation = () => {
  return (
    <nav>
      <div>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/gabycoderhouse/image/upload/v1656361108/EcommerceReact/logo_2_sykshi.png"
            alt="logo"
            className="logo"
          />
        </Link>
      </div>
      <ul>
        <Link to="/" className="li">
          Home
        </Link>
        <Link to="/Category/Zapatillas" className="li">
          Zapatillas
        </Link>
        <Link to="/Category/Remeras" className="li">
          Remeras
        </Link>
        <Link to="/Category/Pantalones" className="li">
          Pantalones
        </Link>
      </ul>
      <div>
       
        <Cart className="carrito" />
       
        
      </div>
    </nav>
  );
};

export default Navigation;
