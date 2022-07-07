import { Button } from "@mui/material";
import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

const CartLleno = () => {
  const { clear, getTotal } = useContext(CartContext);

  return (

    <div>
        <Button variant="outlined" color="error" onClick={() => {
              clear();
            }} style={{margin: "10px"}}>VACIAR CARRITO</Button>

      <p>Total Carrito ${getTotal()} </p>
    </div>
  );
};

export default CartLleno;
