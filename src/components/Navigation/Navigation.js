import { useContext } from "react";

import "./Navigation.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

const Navigation = () => {
  const { totalQty } = useContext(CartContext);
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
      <div style={{ width: 100 }}>
        <Link to="/cart">
          <ShoppingCartIcon className="cart" />
        </Link>
        <span className={totalQty() > 0 ? "number" : null}>
          {totalQty() > 0 ? totalQty() : null}
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
