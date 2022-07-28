import { FiShoppingCart } from "react-icons/fi";
import classes from "./CartBtn.module.css";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { cartState } from "../../store/slices/cart-slice";

const CartBtn = ({setIsInSaleMode}) => {
  const navigate = useNavigate();
  const cart = useSelector(cartState);

  const showCartHandler = () => {
    setIsInSaleMode(false);
    navigate('/cart')
  }
  return (
    <button className={classes["cart-btn"]} onClick={showCartHandler}>
      <FiShoppingCart size={25} />
      <span className={classes.badge}>{cart.totalQty}</span>
    </button>
  );
};

export default CartBtn;
