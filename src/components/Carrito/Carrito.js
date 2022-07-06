import { CardActionArea } from "@mui/material";

import { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import Carta from "../Card/Card";

const Carrito = () => {
  const { cart } = useContext(CartContext);

  return (

    <div>
      <h1>Mi carrito</h1>
      <div>
      {cart.length ? cart.map((item, id) => (
            <Carta item={item} key={id} />
          )) : <Link to="/"><p>Carrito Vacio - Ir a Home</p></Link>} 
      </div>
      
     

    </div>
  );
};

export default Carrito;
