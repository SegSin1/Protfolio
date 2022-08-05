import { useState, useEffect, useReducer } from "react";
import classes from "./ProductItem.module.css";
import { BsCartPlus, BsCheck, BsStarFill, BsStarHalf, BsStar, BsHeart, BsHeartFill } from "react-icons/bs";
import { BiDish } from "react-icons/bi";
import { cartActions } from "../../../../store/slices/cart-slice";
import { productsActions } from "../../../../store/slices/products-slice";
import { useDispatch, useSelector } from "react-redux";
import { dateReducerFn } from '../../../../reducers/dateReducer';
import { useNavigate } from 'react-router-dom';
import noImg from '../../../../assets/noimage.jpg'

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

  let isListingEnded = timer.isExpired;
  let isListingActive = product.status === 'active';

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
    <li key={id} className={`${classes["product-container"]} ${(!isListingActive || isListingEnded) ? classes['not-active'] : classes['active']} ${showMore ? classes["show-more"] : ''}`}>
      <div className={classes['img-container']} >
        <div className={classes.img} onClick={showProductDetailsHandler}>
          <img src={images.length > 0 ? images[0] : noImg} onError={(e) => e.target.src = noImg} alt="productImg" />
        </div>
        {isListingActive && isListingEnded && <div className={`${classes['status']} ${classes['ended']}`}>ENDED</div>}
        {isListingActive && !isListingEnded && availableQty <= 0 && <div className={`${classes['status']} ${classes['out-of-stock']}`}>OUT OF STOCK</div>}
        {isListingActive && !isListingEnded && availableQty === 1 && type !== 'auction' && <div className={`${classes['status']} ${classes['last-one']}`}>LAST ONE</div>}
        {isListingActive && !isListingEnded && availableQty < 3 && availableQty > 1 && type !== 'auction' && <div className={`${classes['status']} ${classes['almost-gone']}`}>ALMOST GONE</div>}
        {isListingActive && (!isListingEnded && (timer.interval === 'hours' || timer.interval === 'ending') && availableQty >= 1) && <div className={`${classes['status']} ${classes['ending-soon']}`}>ENDING SOON</div>}
        {!isListingActive && !isListingEnded && <div className={`${classes['status']} ${classes['pending']}`}>{product.status.toUpperCase()}</div>}
        {<div className={`${classes['favorite']} ${isFavorite && classes['in-favorite']}`} onClick={setFavoriteHandler}>{!isFavorite ? <BsStar size={16} /> : <BsStarFill size={16} />}</div>}
      </div>
      <div className={classes['details-container']}>
        <div className={classes["main-details"]}>
          <div className={classes.title}>{title}</div>
          <div className={classes.price} style={{ fontWeight: 600 }}>{`${(price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))}`}</div>
        </div>
        {<div className={classes["item-description"]}>{descriptionContent} {description.length > 150 && <span onClick={showMoreHandler} style={{ cursor: 'pointer', color: 'rgba(36, 136, 189)' }}>{showMore ? 'show less' : 'show more'}</span>}</div>}
        <div className={classes["btns-container"]}>
          {!isInCart && !isListingEnded && isListingActive && type !== 'auction' && (
            <>
              {(timer.interval === 'hours' || timer.interval === 'ending') && availableQty >= 1 && <span className={classes["item-timer"]} style={{ color: timer.interval === 'ending' ? 'red' : 'inherit' }}>{!isListingEnded && timer.string}</span>}
              <button className={classes.btn} onClick={addToCartHandler}>
                <BsCartPlus size={20} />
              </button>
            </>
          )
          }
          {!isInCart && !isListingEnded && isListingActive && type === 'auction' && (
            <>
              {(timer.interval === 'hours' || timer.interval === 'ending' || timer.interval === 'days') && <span className={classes["item-timer"]} style={{ fontWeight: 600, marginRight: '5px' }}>{!isListingEnded && timer.string}</span>}
              <button>
                <BiDish size={20} />
              </button>
            </>)}

          {isInCart && (
            <div className={`${classes["btns-text"]} ${classes["item-in-cart"]}`}>
              <BsCheck size={20} />
              <span className={`${classes["status-text"]} ${classes["item-in-cart"]}`}>Item in cart</span>
            </div>
          )}

          {isListingEnded && (
            <div className={`${classes["btns-text"]} ${classes["listing-ended"]}`} >
              <span className={classes["status-text"]}>Listing Ended</span>
            </div>
          )}

          {!isListingActive && (
            <div className={`${classes["btns-text"]} ${classes["listing-pending"]}`} >
              <span className={classes["status-text"]}>Listing Pending</span>
            </div>
          )}
        </div>
      </div >
    </li >
  );
};

export default ProductItem;
