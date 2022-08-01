import React, { useState, useEffect } from "react";

import "./ItemListContainer.css";

//Component
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import Footer from "../Footer/Footer";

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

    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setProductos(docs);
  };

  useEffect(() => {
    getProductos();
  }, [category]);

  return (
    <>
    <div className="style">
      <div className="estilo">
        {productos.length > 0 ? <ItemList items={productos} /> : <Spinner />}
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ItemListContainer;
