import classes from './CartSummary.module.css'
import { useSelector } from 'react-redux';

const CartSummary = ({ numOfItems,totalAmount }) => {
    const shippingCost = 65.47;
    const discounts = 0;
    const importFees = 175.45;
    return <div className={classes['summary-container']}>
        <table>
            <tbody>
                <tr>
                    <td>{`${numOfItems > 1 ? 'Items' : 'Item'} (${numOfItems})`}</td>
                    <td>{totalAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                </tr>
                <tr>
                    <td>{`Shipping to 8484354`}</td>
                    <td>{shippingCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                </tr>
                <tr>
                    <td>{`Import Charges`}</td>
                    <td>{importFees.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                </tr>
                <tr>
                    <td>{`Discounts`}</td>
                    <td>{discounts.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                </tr>
                <tr>
                    <td>{`Sub Total`}</td>
                    <td>{(shippingCost+totalAmount+discounts+importFees).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                </tr>
            </tbody>
        </table>
        <div style={{ width: '100%', textAlign: 'center', marginTop: '1rem' }}>
            <button style={{ fontSize:'1.5rem' , backgroundColor: 'rgba(36, 136, 189)',color:'#fff', width: '100%', display: 'inline-block', border: 'none', borderRadius: '10rem', textAlign: 'center', padding: '.8rem 1rem' }}>Proceed to checkout</button>
        </div>
    </div>
}

export default CartSummary;