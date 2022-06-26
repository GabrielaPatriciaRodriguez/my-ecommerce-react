import React from "react";

import { Link } from "react-router-dom";

import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((user) => (
        <div key={user.id}>
        <Link to={`/DetailProduct/${user.id}`}>
        <Item data={user} />
        </Link>
        </div>
      ))}
    </>
  );
};

export default ItemList;
