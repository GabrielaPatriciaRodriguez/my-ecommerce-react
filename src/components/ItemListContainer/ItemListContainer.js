import React, { useState, useEffect } from "react";

import "./ItemListContainer.css";

import { Productos } from "../Data";

import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {
    setProductos(Productos.filter(producto => idCategory ?  producto.category === idCategory : true));
  }, [idCategory]);

  return (
    <>
      <div className="style">
        {productos.length > 0 ? <ItemList items={productos} /> : "Cargando..."}
      </div>
    </>
  );
}

export default ItemListContainer;
