import React, { useState, useEffect } from "react";

import "./ItemListContainer.css";

// import { Productos } from "../Data";

import ItemList from "../ItemList/ItemList";

// import { useParams } from "react-router-dom";

//Firebase
import { db } from "../../Firebase/FirebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  // const { idCategory } = useParams();

  // useEffect(() => {
  //   setProductos(Productos.filter(producto => idCategory ?  producto.category === idCategory : true));
  // }, [idCategory]);

  const getProductos = async () => {
    const q = query(collection(db, "products"));
    const querySnapshot = await getDocs(q);
    const docs = [];
    console.log(querySnapshot);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      docs.push({...doc.data(), id:doc.id})
    });
    setProductos(docs);
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <>
      <div className="style">
        <ItemList items={productos} />
        {/* {productos.length > 0 ? <ItemList items={productos} /> : "Cargando..."} */}
      </div>
    </>
  );
}

export default ItemListContainer;
