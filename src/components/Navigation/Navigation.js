import "./Navigation.css";

import CartWidget from "../CartWidget/CartWidget";


const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#/">Home</a>
        </li>
        <li>
          <a href="#/">Zapatillas</a>
        </li>
        <li>
          <a href="#/">Remeras</a>
        </li>
        <li>
          <a href="#/">Pantalones</a>
        </li>
      </ul>
      <div>
      <CartWidget />
      </div>
    </nav>
  );
};

export default Navigation;
