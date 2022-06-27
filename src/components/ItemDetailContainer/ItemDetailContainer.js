import React, { useEffect, useState } from "react";

import { obtenerProductoXId } from "../Data";

import { useParams } from "react-router-dom";

//Components
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  const [loading, setLoading] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    obtenerProductoXId(id)
      .then((res) => {
        setItem(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <ItemDetail
          title={item.title}
          pictureUrl={item.pictureUrl}
          description={item.description}
          price={item.price}
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;


