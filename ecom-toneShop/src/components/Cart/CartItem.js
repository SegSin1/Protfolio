import classes from './CartItem.module.css'
import productImgA from "../../assets/IMG_3233.jpg";


const CartItem = ({ cartItem }) => {
    console.log(cartItem)
    return <li className={classes['cart-item']} >
        <div className={classes['item-img']}>
            <img src={productImgA} />
        </div>
        <div>
            {cartItem.cartQty}
        </div>
    </li>
}

export default CartItem;