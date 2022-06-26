import React, { useEffect, useState } from 'react';

import "./Zapatillas.css";

import { Productos } from '../../components/Data';

import ItemList from '../../components/ItemList/ItemList';

const Zapatillas = () => {
const [zapatilla, setZapatilla] = useState([]);

let idCategory = Productos.filter(palabra => palabra.category === "Zapatilla")

console.log(idCategory);

useEffect(() => {
setZapatilla(idCategory)
}, [])

  return (
    <>
    <h1>Zapatillas</h1>
    <div className="style">
      {zapatilla.length > 0 ? <ItemList items={zapatilla}/> : "cargando..."} 
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