import React from "react";

import "./ItemCount.css";
import BasicAlerts from "../BasicAlert/BasicAlert";

import { useState } from "react";
import { Button } from "@mui/material";


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
      <Button style={{
              textDecoration: "none",
              margin: 10,
              borderRadius: 15,
              borderColor: "gray",
              color: "whitesmoke",
              padding: 10,
              backgroundColor: "gray",
            }} onClick={() => onAdd(count)}>
        Agregar
      </Button>
    </>
  );
};

export default ItemCount;
