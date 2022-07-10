import classes from './CartItem.module.css'
import { AiFillMinusCircle, AiFillPlusCircle, AiFillDelete, AiOutlineHeart } from 'react-icons/ai';
import { RiDeleteBin5Line, RiDeleteBin6Line } from 'react-icons/ri';

const CartItem = ({ cartItem }) => {
    return <li className={classes['cart-item']} >
        <div className={classes['item-img']} style={{ flex: 2 }}>
            <img src={cartItem.images[0]} alt={"item pic"} />
        </div>
        <div style={{ flex: 2 }}>
            {cartItem.title}
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
            {cartItem.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '2rem', flex: 1 }}>
            <AiFillMinusCircle size={20} fill={'rgba(36, 136, 189)'} />
            {cartItem.cartQty}
            <AiFillPlusCircle size={20} fill={'rgba(36, 136, 189)'} />
        </div>
        <div style={{ fontWeight: 600, flex: 1, textAlign: 'center' }}>
            {(cartItem.price * cartItem.cartQty).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '.5rem', justifyContent: 'center', flexDirection: 'column'}}>
            <div style={{ fontSize: '1.2rem', color: 'rgba(36, 136, 189)', cursor: 'pointer'  }}>Delete</div>
            <div style={{ fontSize: '1.2rem', color: 'rgba(36, 136, 189)', cursor: 'pointer'  }}>Move to watchlist</div>
            <div style={{ fontSize: '1.2rem', color: 'rgba(36, 136, 189)', cursor: 'pointer'  }}>Save for later</div>
            <div style={{ fontSize: '1.2rem', color: 'rgba(36, 136, 189)', cursor: 'pointer'  }}>Find similar items</div>
        </div>

    </li >
}

export default CartItem;