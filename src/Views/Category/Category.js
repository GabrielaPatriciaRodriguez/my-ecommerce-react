import React, { useEffect, useState } from 'react';

import "./Zapatillas.css";

import { useParams } from 'react-router-dom';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const Zapatillas = () => {
const { idCategory } = useParams();

  return (
    <>
    <h1> {idCategory} </h1>
    <div className="style">
      <ItemListContainer /> 
    </div>
    </>
  )
}

export default Zapatillas;

//Importe el useParams

// const Zapatillas = () => {
//   const [zapatilla, setZapatilla] = useState([]);
  
//   let { category } = useParams();
  
//   useEffect(() => {
//   setZapatilla(Productos.filter(palabra => palabra.category === "Zapatilla"))
//   }, [category])
  
//     return (
//       <>
//       <h1>Zapatillas</h1>
//       <div className="style">
//         {zapatilla.length > 0 ? <ItemList items={zapatilla}/> : "cargando..."} 
//       </div>
//       </>
//     )
//   }