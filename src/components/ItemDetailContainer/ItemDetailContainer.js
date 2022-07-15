import React, { useEffect, useState } from "react";

// import { obtenerProductoXId } from "../Data";

import { useParams } from "react-router-dom";

//Components
import ItemDetail from "../ItemDetail/ItemDetail";

//Firebase
import { db } from "../../Firebase/FirebaseConfig";
import {
  getDoc,
  doc,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  const getProduct= async (id) => {
    const document = doc(db, "products", id)
    const response = await getDoc(document)
    const result = {id: response.id, ...response.data()}
    return result
  }

  useEffect(() => {

    getProduct(id).then((doc) => {
      setProduct(doc);
      setLoading(false);
    })

  }, [id]);

  return (
    <div>
      {loading ? (
        <div>Cargando...</div>
      ) : (
            <ItemDetail
              id={product.id}
              image={product.image}
              title={product.title}
              initial={product.initial}
              description={product.description}
              stock={product.stock}
              price={product.price}
              category={product.category}
            />
      )}
    </div>
  );
};

export default ItemDetailContainer;
