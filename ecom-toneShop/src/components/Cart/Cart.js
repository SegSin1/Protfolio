import { useSelector } from 'react-redux'
import classes from './Cart.module.css'
import CartItem from './CartItem'

const Cart = () => {
    const cart = useSelector(state => state.cart);
    return (
        <>
            <div>
                <div className={classes['cart-items-container']}>
                    <ul>{cart.items.map((el) => <CartItem cartItem={el} key={el.id} />)}</ul>
                </div>
            </div>
        </>
    )
}

export default Cart;