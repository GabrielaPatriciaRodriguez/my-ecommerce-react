import * as React from "react";

import { ButtonBase, getTableSortLabelUtilityClass } from "@mui/material";
import { useContext } from "react";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { CartContext } from "../../context/CartContext";

function CartItem({ item }) {
  const { removeItem, getTotal } = useContext(CartContext);
  return (
    <div
      style={{
        width: "auto",
        display: "grid",
        gridTemplateColumns: "2fr 3fr 3fr 2fr 2fr 1fr",
        gridTemplateRows: "auto",
        gridTemplateAreas:
          "imagen, titulo, precioUnitario, cantidad, precioTotal",
        alignContent: "center",
        alignItems: "center",
        padding: "20px",
        border: "1px solid black",
      }}
    >
      <img
        src={item.image}
        style={{ height: "160px", paddingLeft: "10px" }}
      />
      <h3>{item.title}</h3>
      <h4>Precio Unitario:${item.price}</h4>
      <h4>Cantidad: {item.qty}</h4>
      <h4>Precio Total: $ {item.price * item.qty} </h4>
      <ButtonBase
        style={{ paddingRight: "10px" }}
        onClick={() => {
          removeItem(item.id);
        }}
      >
        <DeleteOutlinedIcon />
      </ButtonBase>

      <p>Total ${getTotal()} </p>
    </div>
  );
}

export default CartItem;
