import React from "react";



import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((user) => (
        <Item key={user.id} data={user} />
      ))}
    </>
  );
};

export default ItemList;
