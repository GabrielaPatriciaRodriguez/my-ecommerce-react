
import { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

import CartLleno from "./CartLleno";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (

    <div>
      <h1>Mi carrito</h1>
      <div>
      {cart.length ? cart.map((item, id) => (
            <CartItem item={item} key={id} />
          )) : <Link to="/"><p>Carrito Vacio - Ir a Home</p></Link>} 
      </div>
      <div>
        {cart.length ? <CartLleno /> : null}
      </div>
    </div>
  );
};

export default Cart;
