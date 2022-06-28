import React from "react";

import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/gabycoderhouse/image/upload/v1654732999/EcommerceReact/pexels-andrea-piacquadio-3756042_odsyif.jpg"
        style={{ height: 400, width: "100%", objectFit: "cover" }}
      />
      <h1>Productos</h1>
      <ItemListContainer />
    </div>
  );
};

export default Home;
