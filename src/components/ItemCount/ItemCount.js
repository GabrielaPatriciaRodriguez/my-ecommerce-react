import React from "react";

import "./ItemCount.css";
import BasicAlerts from "../BasicAlert/BasicAlert";

import { useState } from "react";


const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      console.log("No tenemos stock");
    }
  };

  const restar = () => {
    if (!(count === initial)) {
      setCount(count - 1);
    }
  };

  const onChangeCount = (e) => {
    setCount(e.target.value);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <button onClick={restar}>-</button>
        <input value={count} onChange={onChangeCount} style={{width: 20, margin: 5}} />
        <button onClick={sumar}>+</button>
      </form>
      {(count === stock) ? <BasicAlerts /> : null}
      <button className="button" onClick={() => onAdd(count)}>
        Agregar
      </button>
    </>
  );
};

export default ItemCount;
