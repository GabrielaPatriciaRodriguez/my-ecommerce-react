import React, { useState, useEffect } from "react";

//Component
import ItemList from "../../components/ItemList/ItemList";

//Firebase
import { db } from "../../Firebase/FirebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";


import { useParams } from "react-router-dom";


const Category = () => {

  const [productos, setProductos] = useState([]);

  console.log(productos)

  const { category } = useParams();

  const getProductos = async () => {
    const q = query(collection(db, "products"), (where("category", "==", category)));
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
    getProductos(productos.filter(producto => category ?  producto.category === category : true));
  }, [category]);

  return (
    <>
      <div className="style">
        {productos.length > 0 ? <ItemList items={productos} /> : "Cargando..."}
      </div>
    </>
  );

};

export default Category;
