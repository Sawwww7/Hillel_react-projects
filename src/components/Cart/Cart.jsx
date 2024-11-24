import CartItem from "./CartItem";
import Button from "../UI/Button/Button";
import "./cart.css";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <a href="#" className="back-link">
        ← Back to menu
      </a>
      <h1 className="cart-title">Your cart, Andrii</h1>

      <div className="cart-item">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart-actions">
        <Button
          className={"order-btn"}
          // onClick={}
          aria_label={"Order pizzas"}
        >
          Order pizzas
        </Button>
        <Button
          className={"clear-btn"}
          // onClick={}
          aria_label={"Clear cart"}
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
};

export default Cart;
