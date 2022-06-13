import { FiShoppingCart } from "react-icons/fi";
import classes from "./CartBtn.module.css";
import useCartCtx from "../../hooks/useCartCtx";
const CartBtn = () => {
  const { cart } = useCartCtx();
  return (
    <button className={classes["cart-btn"]}>
      <FiShoppingCart size={25} />
      <span className={classes.badge}>{cart.totalQty}</span>
    </button>
  );
};

export default CartBtn;
