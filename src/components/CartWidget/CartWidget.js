import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./CartWidget.css";

const CartWidget = () => {
  return (
    <>
      <ShoppingCartIcon className="carrito" />
      <span>1</span>
    </>
  );
};

export default CartWidget;
