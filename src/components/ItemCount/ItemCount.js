import React, { useState } from 'react'


const ItemCount = ({initial, stock}) => {

  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("No tenemos stock");
    }
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>{count}</p>
        <div>  
          <button onClick={sumar}>+</button>
          <button onClick={restar}>-</button>
        </div>
      <button onClick={console.log("Boton para agregar en el futuro al carrito: ", count)}>AGREGAR</button>
    </div>
  )
}

export default ItemCount;