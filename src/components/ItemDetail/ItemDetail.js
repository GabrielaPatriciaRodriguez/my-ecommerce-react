import React, { useState, useContext } from "react";
import "./ItemDetail.css";

import { CartContext } from "../../context/CartContext";

import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

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
    addCart({
      id,
      title,
      image,
      description,
      price,
      stock,
      initial,
      qty: cant,
    });
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
        {!compra ? (
          <ItemCount initial={count} stock={stock} onAdd={onAdd} />
        ) : (
          <Link to="/cart" style={{textDecoration: "none",}}>
            <Button style={{
              margin: 10,
              borderRadius: 15,
              borderColor: "gray",
              color: "whitesmoke",
              padding: 10,
              backgroundColor: "gray",
            }}
            >
              Ir al carrito
            </Button>
          </Link>
        )}
       
      </div>
    </div>
  );
};

export default ItemDetail;
