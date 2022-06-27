import React from "react";

const ItemDetail = ({ title, pictureUrl, description, price }) => {
  const styles = {
    cardDetail: {
      display: "flex",
      backgroundColor: "gray",
      margin: 20,
      padding: 30,
      maxWidth: 445,
    },
    img: {
      margin: 20,
      width: 200,
    },
  };
  return (
    <div style={styles.cardDetail}>
      <div>
        <h3>{title}</h3>
        <img
          src={pictureUrl}
          alt={description}
          sx={{ maxWidth: 245 }}
          style={styles.img}
        />
      </div>
      <div>
        <p> {description} </p>
        <p>$ {price} </p>
        <p>ItemCount</p>
        <button>Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
