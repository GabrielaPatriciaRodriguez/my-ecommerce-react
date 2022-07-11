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

            <Link to="/checkout">
            <Button variant="contained" color="success" >FINALIZAR COMPRA</Button>
            </Link>
      
    </div>
  );
};

export default CartLleno;
