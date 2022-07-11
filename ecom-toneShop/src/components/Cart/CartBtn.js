import { FiShoppingCart } from "react-icons/fi";
import classes from "./CartBtn.module.css";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const CartBtn = () => {
  const navigate = useNavigate();
  const totalQty = useSelector(state => state.cart.totalQty);

  const showCartHandler = () => {
    navigate('/cart')
  }
  return (
    <button className={classes["cart-btn"]} onClick={showCartHandler}>
      <FiShoppingCart size={25} />
      <span className={classes.badge}>{totalQty}</span>
    </button>
  );
};

export default CartBtn;
