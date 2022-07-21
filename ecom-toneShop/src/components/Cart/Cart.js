import { useSelector } from 'react-redux'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import CartSummary from './CartSummary';
import { useNavigate } from 'react-router-dom'
import { productsActions } from "../../store/slices/products-slice"

const Cart = () => {
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const fillCartHandler = () => {
        navigate('/')
    }
    return (
        <>
            <div className={classes['cart-container']}>
                <div className={classes['cart-items-container']}>
                    {cart.items.length <= 0 &&
                        <div className={classes['cart-empty-container']}>
                            <div className={classes['cart-empty-text']}>No items in cart</div>
                            <button className={classes['cart-empty-btn']} onClick={fillCartHandler}>Fill my cart</button>
                        </div>}
                    {cart.items.length > 0 && <ul> {cart.items.map((el) => <CartItem cartItem={el} key={el.id} />)}</ul>}
                </div>
                {cart.items.length > 0 &&
                    <div className={classes['cart-summary-container']}>
                        <CartSummary numOfItems={cart.totalQty} totalAmount={cart.totalAmount} />
                    </div>}
            </div>
        </>
    )
}

export default Cart;