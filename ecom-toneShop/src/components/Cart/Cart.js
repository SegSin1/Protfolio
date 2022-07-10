import { useSelector } from 'react-redux'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import CartSummary from './CartSummary';
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const navigate = useNavigate();
    return (
        <>
            <div className={classes['cart-container']}>
                <div className={classes['cart-items-container']}>
                    {cart.items.length <= 0 &&
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>No items in cart</div>
                            <button style={{ fontSize: '1.5rem', backgroundColor: 'rgba(36, 136, 189)', color: '#fff', border: 'none', borderRadius: '10rem', textAlign: 'center', padding: '.8rem 5rem',cursor:'pointer' }} onClick={() => { navigate('/') }}>Fill my cart</button>
                        </div>}
                    {cart.items.length > 0 && <ul> {cart.items.map((el) => <CartItem cartItem={el} key={el.id} />)}</ul>}
                </div>
                {cart.items.length > 0 && <div className={classes['cart-summary-container']}> <CartSummary numOfItems={cart.totalQty} /></div>}
            </div>
        </>
    )
}

export default Cart;