import React, { useEffect, useState } from "react";

// import { obtenerProductoXId } from "../Data";

import { useParams } from "react-router-dom";

//Components
import ItemDetail from "../ItemDetail/ItemDetail";

//Firebase
import { db } from "../../Firebase/FirebaseConfig";
import {
  collection,
  query,
  getDocs,
  documentId,
  where,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const q = query(
        collection(db, "products"),
        where(documentId(), "==", id)
      );
      const querySnapshot = await getDocs(q);
      const docs = [];

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProduct(docs);
      console.log(setProduct);
    };
    getProduct();
    setLoading(false);
  }, [id]);

  return (
    <div>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        product.map((data) => {
          return (
            <ItemDetail
              image={data.image}
              title={data.title}
              initial={data.initial}
              stock={data.stock}
              price={data.price}
              category={data.category}
            />
          );
        })
      )}
    </div>
  );
};

export default ItemDetailContainer;
