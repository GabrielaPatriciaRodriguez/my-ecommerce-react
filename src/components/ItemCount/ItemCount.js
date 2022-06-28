import React from "react";

import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Cantidad: {count}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <br />
    </div>
  );
};

export default ItemCount;
