import React, { useState } from "react";
import "./ItemDetail.css";

import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({
  title,
  pictureUrl,
  description,
  price,
  stock,
  initial,
}) => {
  const [count, setCount] = useState(initial);

  const [compra, setCompra] = useState(false);

  const onAdd = (cant) => {
    setCount(cant);
    setCompra(true);
  };
  return (
    <div className="cardDetail">
      <div>
        <h2>{title}</h2>
        <img
          src={pictureUrl}
          alt={description}
          sx={{ maxWidth: 245 }}
          className="img"
        />
      </div>
      <div className="description">
        <p> {description} </p>
        <p>$ {price} </p>
        <p>Stock: {stock} </p>
        <p>Cantidad comprada: {count} </p>
        {!compra ? (
          <ItemCount initial={count} stock={stock} onAdd={onAdd} />
        ) : (
          <Link to="/cart">
            <button>Terminar Compra</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
