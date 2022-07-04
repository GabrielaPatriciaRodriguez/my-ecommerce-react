import { createContext, useState } from "react";

import Carta from "../components/Card/Card";

import { Productos } from "../components/Data";

export const CartContext = createContext();

const initialState = Productos;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (itemId) => {
    //Logica para preguntar si un item esta en el carrito
    return cart && !!cart.filter(item => item.id === itemId)[0]?.id
  }

  const addCart = (itemCart) => {
    //Logica para agregar al carrito
    setCart([...cart])
    //Busco si existe el producto
    //Si existe tengo que recorrer con un map
    //Cuando coincida tengo que cambiar el valor
    //Si no existe hago un push con el nuevo item

    // const existeProducto= cart.find((item => item.id === itemCart.id))

    if (isInCart(itemCart.id)) {
       const cartActualizado = cart.map(item => {
        if(item.id === itemCart.id){
            return{...item, qty: item.qty + itemCart.qty}
        }
        return item
       })
       setCart(cartActualizado) 
    }
    else {
        setCart([...cart, itemCart])
    }
  }

  const clear = () =>{
    setCart([])
  }

  const removeItem = (itemId) =>{
    const cartSinProducto = cart.filter(item => item.id !== itemId)
    setCart(cartSinProducto)
  }

  return (
    <CartContext.Provider value={{ cart, addCart, isInCart, clear, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};