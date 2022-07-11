import classes from './CartItem.module.css'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { cartActions } from '../../store/slices/cart-slice';
import { useDispatch, useSelector } from 'react-redux'
import { productsActions } from "../../store/slices/products-slice";
import {useNavigate} from 'react-router-dom';

const CartItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const removeProductFromCartHandler = () => {
        dispatch(cartActions.deleteItemsFromCart(cartItem));
        dispatch(productsActions.returnDeletedCartProducts(cartItem));
    }

    const addItemHandler = () => {
        if (cartItem.availableQty > 0) {
            dispatch(cartActions.addItemToCart(cartItem));
            dispatch(productsActions.removeProduct(cartItem));
        }
    }

    const removeItemHandler = () => {
        dispatch(cartActions.removeItemFromCart(cartItem));
        dispatch(productsActions.addProduct(cartItem));
    }


    return <li className={classes['cart-item']} >
        <div className={classes['item-img']} style={{ flex: 2, cursor:'pointer' }} onClick={()=>navigate(`/products/${cartItem.id}`)}>
            <img src={cartItem.images[0]} alt={"item pic"} />
        </div>
        <div style={{ flex: 2 }}>
            {cartItem.title}
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
            {cartItem.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '2rem', flex: 1 }}>
            <AiFillMinusCircle size={20} fill={'rgba(36, 136, 189)'} onClick={removeItemHandler} />
            {cartItem.cartQty}
            <AiFillPlusCircle size={20} fill={'rgba(36, 136, 189)'} style={{ cursor: cartItem.availableQty > 0 ? 'pointer' : 'not-allowed', opacity: cartItem.availableQty > 0 ? '1' : '0.3' }} onClick={addItemHandler} />
        </div>
        <div style={{ fontWeight: 600, flex: 1, textAlign: 'center' }}>
            {(cartItem.price * cartItem.cartQty).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '.5rem', justifyContent: 'center', flexDirection: 'column' }}>
            <div onClick={() => { removeProductFromCartHandler() }} style={{ fontSize: '1.2rem', color: 'rgba(36, 136, 189)', cursor: 'pointer' }} >Delete</div>
            <div style={{ fontSize: '1.2rem', color: 'rgba(36, 136, 189)', cursor: 'pointer' }}>Move to watchlist</div>
            <div style={{ fontSize: '1.2rem', color: 'rgba(36, 136, 189)', cursor: 'pointer' }}>Save for later</div>
            <div style={{ fontSize: '1.2rem', color: 'rgba(36, 136, 189)', cursor: 'pointer' }}>Find similar items</div>
        </div>

    </li >
}

export default CartItem;