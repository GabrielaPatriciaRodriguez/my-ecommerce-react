import React, { useState, useContext } from "react";
import "./ItemDetail.css";

import { CartContext } from "../../context/CartContext";

import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({
  category,
  id,
  title,
  image,
  description,
  price,
  stock,
  initial,
}) => {
  const { addCart } = useContext(CartContext);

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
        <h3>{category}</h3>
        <img
          src={image}
          alt={description}
          sx={{ maxWidth: 245 }}
          className="img"
        />
      </div>
      <div className="description">
        <p> {description} </p>
        <p>Categoria: {category} </p>
        <p>$ {price} </p>
        <p>Stock: {stock} </p>
        <p>Cantidad comprada: {count} </p>
        {!compra ? (
          <ItemCount initial={count} stock={stock} onAdd={onAdd} />
        ) : (
          <Link to="/cart">
            <button
              onClick={() => {
                addCart({
                  id,
                  title,
                  image,
                  description,
                  price,
                  stock,
                  initial,
                  qty: count,
                });
              }}
            >
              Cargar al Carrito
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
