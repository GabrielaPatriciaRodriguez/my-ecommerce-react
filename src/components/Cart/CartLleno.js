import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

const CartLleno = () => {
  const { clear, getTotal } = useContext(CartContext);

  return (

    <div>
        <Button variant="outlined" color="error" onClick={() => {
              clear();
            }} style={{margin: "10px"}}>VACIAR CARRITO</Button>

      <p>Total Carrito ${getTotal()} </p>

      <div>
      <Link to="/">
            <Button variant="contained" color="success" >Continuar comprando</Button>
            </Link>

      <Link to="/checkout">
            <Button variant="contained" color="success" >FINALIZAR COMPRA</Button>
            </Link>
      </div>

           
      
    </div>
  );
};

export default CartLleno;
