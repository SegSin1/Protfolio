import { useState, useEffect, useReducer } from "react";
import classes from "./ProductItem.module.css";
import { BsCartPlus, BsCheck, BsStarFill, BsStarHalf, BsStar, BsHeart, BsHeartFill } from "react-icons/bs";
import { BiDish } from "react-icons/bi";
import { cartActions } from "../../../../store/slices/cart-slice";
import { productsActions } from "../../../../store/slices/products-slice";
import { useDispatch, useSelector } from "react-redux";
import { dateReducerFn } from '../../../../reducers/dateReducer';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items)
  const products = useSelector(state => state.products);
  const [timer, dispatchTimer] = useReducer(dateReducerFn, { isExpired: false, timer: 0, interval: "" })
  const { price, title, description, id, availableQty, type, expiry, images } = product;
  const [isInCart, setIsInCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [descriptionContent, setDescriptionContent] = useState(false);

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

  useEffect(() => {
    if (showMore)
      setDescriptionContent(description)
    else
      setDescriptionContent(description.length > 150 ? `${description.slice(0, 149)} ...` : description)
  }, [showMore, description])


  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart(product))
    dispatch(productsActions.removeProduct(product))
    setIsInCart(true);
  };

  const showMoreHandler = () => {
    setShowMore(prevState => !prevState)
  }

  const setFavoriteHandler = () => {
    setIsFavorite(prevState => !prevState)
  }

  const showProductDetailsHandler = () => {
    navigate(`/products/${id}`)
  }

  return (
    <li key={id} className={`${classes["product-container"]} ${showMore ? classes["show-more"] : ''}`}>
      <div className={classes['img-container']} onClick={showProductDetailsHandler}>
        <div className={classes.img}>
          <img src={images[0]} style={{}} alt="productImg" />
        </div>
        {timer.isExpired && <div className={`${classes['status']} ${classes['ended']}`}>ENDED</div>}
        {!timer.isExpired && availableQty <= 0 && <div className={`${classes['status']} ${classes['out-of-stock']}`}>OUT OF STOCK</div>}
        {!timer.isExpired && availableQty === 1 && type !== 'auction' && <div className={`${classes['status']} ${classes['last-one']}`}>LAST ONE</div>}
        {!timer.isExpired && availableQty < 3 && availableQty > 1 && type !== 'auction' && <div className={`${classes['status']} ${classes['almost-gone']}`}>ALMOST GONE</div>}
        {(!timer.isExpired && (timer.interval === 'hours' || timer.interval === 'ending') && availableQty >= 1) && <div className={`${classes['status']} ${classes['ending-soon']}`}>ENDING SOON</div>}
        {<div className={`${classes['favorite']} ${isFavorite && classes['in-favorite']}`} onClick={setFavoriteHandler}>{!isFavorite ? <BsStar size={16} /> : <BsStarFill size={16} />}</div>}
      </div>
      <div className={classes['details-container']}>
        <div className={classes["main-details"]}>
          <div className={classes.title}>{title}</div>
          <div className={classes.price} style={{ fontWeight: 600 }}>{`${(price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))}`}</div>
        </div>
        {<div className={classes["item-description"]}>{descriptionContent} {description.length > 150 && <span onClick={showMoreHandler} style={{ cursor: 'pointer', color: 'rgba(36, 136, 189)' }}>{showMore ? 'show less' : 'show more'}</span>}</div>}
        <div className={classes["btns-container"]}>
          {!isInCart && !timer.isExpired && type !== 'auction' && (
            <>
              {(timer.interval === 'hours' || timer.interval === 'ending') && availableQty >= 1 && <span className={classes["item-timer"]} style={{ color: timer.interval === 'ending' ? 'red' : 'inherit' }}>{!timer.isExpired && timer.string}</span>}
              <button className={classes.btn} onClick={addToCartHandler}>
                <BsCartPlus size={20} />
              </button>
            </>
          )
          }
          {!isInCart && !timer.isExpired && type === 'auction' && (
            <>
              {(timer.interval === 'hours' || timer.interval === 'ending' || timer.interval === 'days') && <span className={classes["item-timer"]} style={{ fontWeight: 600, marginRight: '5px' }}>{!timer.isExpired && timer.string}</span>}
              <button>
                <BiDish size={20} />
              </button>
            </>)}


          {isInCart && (
            <div
              style={{
                color: "rgb(3, 181, 175)",
              }}
              className={classes["btns-text"]}
            >
              <BsCheck size={20} />
              <span style={{ fontWeight: 600 }}>Item in cart</span>
            </div>
          )}

          {timer.isExpired && (
            <div
              className={classes["btns-text"]}
              style={{
                color: "red"
              }}
            >
              <span style={{ fontWeight: 600 }}>Listing Ended</span>
            </div>
          )}
        </div>
      </div >
    </li >
  );
};

export default ProductItem;
