import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./Cart.css";

import { useContext, useState } from 'react';

import { CartContext } from '../../context/CartContext';

const Cart = () => {

  const {cart} = useContext(CartContext);

  return (
    <>
      <ShoppingCartIcon className="carrito" />
      <span>{cart.length} </span>
    </>
  );
};

export default Cart;
