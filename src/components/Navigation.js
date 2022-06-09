import "./Navigation.css";

import CartWidget from "../components/CartWidget";


const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Hombre</a>
        </li>
        <li>
          <a href="#">Mujer</a>
        </li>
        <li>
          <a href="#">Niño</a>
        </li>
        <li>
          <a href="#">Niña</a>
        </li>
      </ul>
      <div>
      <CartWidget />
      </div>
    </nav>
  );
};

export default Navigation;
