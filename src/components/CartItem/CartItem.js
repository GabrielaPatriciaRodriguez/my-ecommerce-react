import * as React from "react";
import "./CartItem.css";

import { ButtonBase } from "@mui/material";
import { useContext } from "react";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { CartContext } from "../../context/CartContext";

function CartItem({ item }) {
  const { removeItem, getTotal } = useContext(CartContext);
  return (
    <div
     className="itemCart"
    >
      <img src={item.image} style={{ height: "160px", paddingLeft: "10px" }} />
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
