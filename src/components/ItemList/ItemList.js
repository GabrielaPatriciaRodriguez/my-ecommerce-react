import React from "react";



import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((producto) => (
        <Item key={producto.id} data={producto} />
      ))}
    </>
  );
};

export default ItemList;
