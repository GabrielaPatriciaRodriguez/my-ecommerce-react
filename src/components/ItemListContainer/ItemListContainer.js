import React, { useState, useEffect } from "react";

import "./ItemListContainer.css";

import { Productos } from "../Data";

import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(Productos);
  }, []);

  return (
    <>
      <h1>Productos</h1>
      <div className="style">
        {users.length > 0 ? <ItemList items={users} /> : "Cargando..."}
      </div>
    </>
  );
}

export default ItemListContainer;
