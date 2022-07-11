import React, { useState, useEffect } from "react";

import "./ItemListContainer.css";

//Component
import ItemList from "../ItemList/ItemList";

//Firebase
import { db } from "../../Firebase/FirebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    const q = query(collection(db, "products"));
    const querySnapshot = await getDocs(q);
    const docs = [];
    console.log(querySnapshot);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      docs.push({ ...doc.data(), id: doc.id });
    });
    setProductos(docs);
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <>
      <div className="style">
        {productos.length > 0 ? <ItemList items={productos} /> : "Cargando..."}
      </div>
    </>
  );
}

export default ItemListContainer;
