import React from "react";
import ItemCountContainer from "../ItemCountContainer/ItemCountContainer";

const ItemDetail = ({ title, pictureUrl, description, price }) => {
  const styles = {
    cardDetail: {
      display: "flex",
      backgroundColor: "whitesmoke",
      margin: 30,
      padding: 30,
      maxWidth: 645,
      borderRadius: 5,
    },
    img: {
      margin: 20,
      width: 300,
    },
    button: {
      borderRadius: 15,
      borderColor: "gray",
      color: "whitesmoke",
      padding: 10,
      backgroundColor: "gray",
    },
    description: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 20
    }
  };
  return (
    <div style={styles.cardDetail}>
      <div>
        <h2>{title}</h2>
        <img
          src={pictureUrl}
          alt={description}
          sx={{ maxWidth: 245 }}
          style={styles.img}
        />
      </div>
      <div style={styles.description}>
        <p> {description} </p>
        <p>$ {price} </p>
        <ItemCountContainer />
        <button style={styles.button}>AGREGAR AL CARRITO</button>
      </div>
    </div>
  );
};

export default ItemDetail;
