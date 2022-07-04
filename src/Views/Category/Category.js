import React from "react";

import { useParams } from "react-router-dom";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Category = () => {
  const { idCategory } = useParams();
  
  return (
    <div>
      <h1> {idCategory} </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ItemListContainer />
      </div>
    </div>
  );
};

export default Category;
