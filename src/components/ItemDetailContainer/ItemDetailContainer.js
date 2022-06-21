import React, { useEffect, useState } from "react";

import { obtenerProductoXId } from "../Data";

//Components
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  const [loading, setLoading] = useState([]);

  const id = 1;

  useEffect(() => {
    obtenerProductoXId(id)
      .then((res) => {
        setItem(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <hr />
      <h1>Item Detail - Desafio 6</h1>
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
