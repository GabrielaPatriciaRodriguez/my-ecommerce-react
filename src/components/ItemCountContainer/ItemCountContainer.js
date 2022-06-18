import React from "react";

import "./ItemCountContainer.css";

//Components

import ItemCount from "../ItemCount/ItemCount";

const ItemCountContainer = ({ producto }) => {
  const { stock, name } = producto;

  return (
    <>
      <p className="Producto">{name}</p>
      <ItemCount initial={1} stock={stock} />
    </>
  );
};

export default ItemCountContainer;
