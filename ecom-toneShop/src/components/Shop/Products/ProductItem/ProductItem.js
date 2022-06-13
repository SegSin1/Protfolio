import { useState } from "react";
import classes from "./ProductItem.module.css";
import productImgA from "../../../../assets/IMG_3233.jpg";
import productImgB from "../../../../assets/IMG_6037.jpg";
import productImgC from "../../../../assets/IMG_1948-1.jpg";
import productImgD from "../../../../assets/IMG_5901.jpg";
import { BsCartPlus, BsFillDashCircleFill, BsCartCheck,BsCheck,BsStarFill,BsStarHalf,BsStar } from "react-icons/bs";
import useCartCtx from "../../../../hooks/useCartCtx";

const ProductItem = ({ product }) => {
  const { price, title, cartQty, description } = product;
  const { addToCart, removeFromCart } = useCartCtx();
  // if exists in cart
  const { isInCart, setIsInCart } = useState(false);
  // if qty is more than 0;
  const { isAvaliable, setIsAvaliable } = useState(false);

  const addToCartHandler = () => {
    addToCart(product);
  };

  const removeFromCartHandler = () => {
    removeFromCart(product);
  };

  return (
    <>
      <li className={classes["product-container"]}>
        <div className={classes.img}>
          <img src={productImgA} style={{ width: "100%" }} />
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          <div className={classes.details}>
            <div className={classes["main-details"]}>
              <div className={classes.title}>{title}</div>
              <div className={classes.price}>{`$${price}`}</div>
            </div>
            <div>{description}</div>
            <div className={classes.btns}>
              {/* <button className={classes.btn} onClick={removeFromCartHandler}>
                <BsFillDashCircleFill size={20} />
              </button>
              <div>{cartQty}</div> */}
              {!cartQty && (
                <button className={classes.btn} onClick={addToCartHandler}>
                  <BsCartPlus size={20} />
                </button>
              )}

              {cartQty && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    color:"rgb(3, 181, 175)"
                  }}
                >
                  <BsCheck size={20} />
                  <span style={{fontWeight:600}}>Item in cart</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ProductItem;
