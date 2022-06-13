
import React from "react"

import ItemCount from "../ItemCount/ItemCount";

import "./ItemListContainer.css";



const ItemListContainer = ({producto}) => {
  
  const { stock, name } = producto;

  return (
    <>
     <p className="Producto">{name}</p>
     <ItemCount initial={1} stock={stock}/>
    </>
  );
};
  
export default ItemListContainer;

 

  