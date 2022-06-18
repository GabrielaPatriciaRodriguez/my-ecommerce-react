import { style } from "@mui/system";
import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";

// import { Productos } from '../Data';

import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //Llamada a la api
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <>
      <h1>Github Users</h1>
      <div className="style">
        {
          users ? <ItemList items={ users } /> : "No hay users..."
        }

        {/* <div key={idx}>  
        {Productos.map( (producto, idx) => <Item data={producto} /> )}
        </div> */}
      </div>
    </>
  );
}

export default ItemListContainer;
