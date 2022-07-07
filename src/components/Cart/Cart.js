
import { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clear } = useContext(CartContext);

  return (

    <div>
      <h1>Mi carrito</h1>
      <div>
      {cart.length ? cart.map((item, id) => (
            <CartItem item={item} key={id} />
          )) : <Link to="/"><p>Carrito Vacio - Ir a Home</p></Link>} 
      </div>
      <div>
      <button
            onClick={() => {
              clear();
            }} style={{paddingRight: "10px"}}
          >
            Vaciar Carrito
          </button>
      </div>
    </div>
  );
};

export default Cart;
