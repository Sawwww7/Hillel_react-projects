import "./menu.css";
import MenuItem from "./MenuItem";

const Menu = ({ pizzas }) => {
  return (
    <div className="menu-container">
      {pizzas.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default Menu;
