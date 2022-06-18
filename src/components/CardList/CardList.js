import React from "react";

import { Productos } from "../Data";

import "./CardList.css";

//Components

import CardComponent from "../CardComponent/CardComponent";

const CardList = () => {
  return (
    <div className="style">
      {Productos.map((item, id) => (
        <CardComponent data={item} key={id} />
      ))}
    </div>
  );
};

export default CardList;
