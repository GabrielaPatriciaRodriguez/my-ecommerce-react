import React from 'react';
import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';
import Carta from '../Card/Card';

const Carrito = () => {
    const {cart, clear} = useContext(CartContext);

    console.log("cart", cart)

  return (
    <div>
        <h1>Mi carrito</h1>
        
        {cart.map((item, id) => <Carta item={item} key={id} />)} 

        <button onClick={() => {clear()}}>Vaciar</button>

    </div>
  )

  
}

export default Carrito;