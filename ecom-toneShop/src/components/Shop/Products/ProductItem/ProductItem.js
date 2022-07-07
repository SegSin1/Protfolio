import { useState, useEffect, useReducer } from "react";
import classes from "./ProductItem.module.css";
import productImgA from "../../../../assets/IMG_3233.jpg";
// import productImgB from "../../../../assets/IMG_6037.jpg";
// import productImgC from "../../../../assets/IMG_1948-1.jpg";
// import productImgD from "../../../../assets/IMG_5901.jpg";
import { BsCartPlus, BsFillDashCircleFill, BsCartCheck, BsCheck, BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { BiDish } from "react-icons/bi";
import { cartActions } from "../../../../store/slices/cart-slice";
import { productsActions } from "../../../../store/slices/products-slice";
import { useDispatch, useSelector } from "react-redux";
import { dateReducerFn } from '../../../../reducers/dateReducer'

const ProductItem = ({ product }) => {
  const { price, title, description, id, availableQty, type, expiry } = product;
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(false);
  const cartItems = useSelector(state => state.cart.items)
  const products = useSelector(state => state.products);
  const [timer, dispatchTimer] = useReducer(dateReducerFn, { isExpired: false, timer: 0, interval: "" })

  useEffect(() => {
    dispatchTimer({ type: 'DD', payload: { date: expiry } })
    if (timer.isExpired)
      return;
    const bidTimer = setTimeout(() => {
      dispatchTimer({ type: 'DD', payload: { date: expiry } })
    }, 1000);

    return () => clearTimeout(bidTimer)
  }, [timer.isExpired, timer.string, timer.interval, expiry])

  useEffect(() => {
    setIsInCart(cartItems.findIndex(el => el.id === id) !== -1)
  }, [cartItems, id, products])

  // // if exists in cart
  // // if qty is more than 0;
  // const { isAvaliable, setIsAvaliable } = useState(false);

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart(product))
    dispatch(productsActions.removeProduct(product))
    setIsInCart(true);
  };


  return (
    <li key={id} className={classes["product-container"]}>
      <div className={classes.img}>
        <img src={productImgA} style={{ width: "100%" }} alt="productImg" />
        {availableQty <= 0 && <div className={`${classes['status']} ${classes['out-of-stock']}`}>OUT OF STOCK</div>}
        {availableQty === 1 && <div className={classes['status'].concat(classes['last-one'])}>LAST ONE</div>}
        {availableQty < 3 && availableQty > 1 && <div className={classes['status'].concat(classes['almost-gone'])}>ALMOST GONE</div>}
        {((timer.interval === 'hours' || timer.interval === 'ending') && availableQty >= 1) && <div className={classes['status'].concat(classes['ending-soon'])}>ENDING SOON</div>}

      </div>
      <div style={{ width: "100%", height: "100%" }}>
        <div className={classes.details}>
          <div className={classes["main-details"]}>
            <div className={classes.title}>{title}</div>
            <div className={classes.price}>{`$${price}`}</div>
          </div>
          {<div>{description}</div>}
          <div className={classes.btns}>
            {!isInCart && !timer.isExpired && type !== 'auction' && (
              <>
                {(timer.interval === 'hours' || timer.interval === 'ending') && availableQty >= 1 && <span style={{ fontWeight: 600, marginRight: '5px', color: timer.interval === 'ending' ? 'red' : 'inherit' }}>{!timer.isExpired && timer.string}</span>}
                <button className={classes.btn} onClick={addToCartHandler}>
                  <BsCartPlus size={20} />
                </button>
              </>
            )
            }
            {!isInCart && !timer.isExpired && type === 'auction' && (
              <>
                {(timer.interval === 'hours' || timer.interval === 'ending' || timer.interval === 'days') && <span style={{ fontWeight: 600, marginRight: '5px' }}>{!timer.isExpired && timer.string}</span>}
                <button>
                  <BiDish size={20} />
                </button>
              </>)}


            {isInCart && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  color: "rgb(3, 181, 175)"
                }}
              >
                <BsCheck size={20} />
                <span style={{ fontWeight: 600 }}>Item in cart</span>
              </div>
            )}

            {timer.isExpired && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  color: "red"
                }}
              >
                <span style={{ fontWeight: 600 }}>Listing Ended</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </li >
  );
};

export default ProductItem;
