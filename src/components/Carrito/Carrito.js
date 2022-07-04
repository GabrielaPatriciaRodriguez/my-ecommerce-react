import React from 'react';
import { useContext, useState } from 'react';

import { CartContext } from '../../context/CartContext';
import Carta from '../Card/Card';
import Cart from '../Cart/Cart';

const Carrito = () => {
    const {cart, setCart, addCart, isInCart, clear, removeItem} = useContext(CartContext);

console.log(cart)

  return (
    <div>
        <h1>Mi carrito</h1>
        <p>Cantidad de productos cargados: {cart.length} </p>
        <button>Vaciar</button>
        {/* {cart.map((item, id) => <Carta item={item} key={id} />)} */}
    </div>
  )
}

export default Carrito;