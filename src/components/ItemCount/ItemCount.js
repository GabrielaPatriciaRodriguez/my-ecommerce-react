import React, { useState } from "react";

const ItemCount = ({ initial, stock }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("No tenemos stock");
    }
  };

  const restar = () => {
    if (count > initial) {
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
      <button>AGREGAR</button>
    </div>
  );
};

export default ItemCount;
