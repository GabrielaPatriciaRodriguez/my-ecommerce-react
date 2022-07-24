import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import "./Cart.css";

const CartLleno = () => {
  const { clear, getTotal } = useContext(CartContext);

  return (
    <div>
      <Link to="/" className="link">
        <Button variant="outlined">Continuar comprando</Button>
      </Link>

      <p>Total Carrito ${getTotal()} </p>

      <div>
        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            clear();
          }}
          style={{ margin: "10px" }}
        >
          VACIAR CARRITO
        </Button>

        <Link to="/checkout" className="link">
          <Button variant="contained" color="success">
            FINALIZAR COMPRA
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartLleno;
