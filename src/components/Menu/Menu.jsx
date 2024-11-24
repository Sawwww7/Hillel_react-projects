import "./menu.css";
import MenuItem from "./MenuItem";
import Cart from "../Cart/Cart";

const Menu = ({ pizzas, cartItems }) => {
  return (
    <>
      <Cart cartItems={cartItems} />
      <div className="menu-container">
        {pizzas.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </>
  );
};

export default Menu;
