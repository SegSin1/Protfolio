import {FiShoppingCart} from 'react-icons/fi'
import classes from './CartBtn.module.css'

const CartBtn = ()=>{
    return (<button className={classes['cart-btn']}>
        <FiShoppingCart size={25}/>
        <span className={classes.badge}>15</span>
    </button>)
}

export default CartBtn;