import React, { useState, useEffect } from "react";

import "./ItemListContainer.css";

//Component
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";

//Firebase
import { db } from "../../Firebase/FirebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  const { category } = useParams();

  const getProductos = async () => {
    const q = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));
    const querySnapshot = await getDocs(q);
    const docs = [];
    console.log(querySnapshot);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      docs.push({ ...doc.data(), id: doc.id });
    });
    setProductos(docs);
  };

  useEffect(() => {
    getProductos();
  }, [category]);

  return (
    <div className="style">
      <div className="estilo">
        {productos.length > 0 ? <ItemList items={productos} /> : <Spinner />}
      </div>
    </div>
  );
}

export default ItemListContainer;
