import React from 'react';

import { useParams } from 'react-router-dom';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const Zapatillas = () => {
const { idCategory } = useParams();

  return (
    <div>
    <h1> {idCategory} </h1>
    <div style={{display: "flex", justifyContent: "center"}}>
      <ItemListContainer /> 
    </div>
    </div>
  )
}

export default Zapatillas;

