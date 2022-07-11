import classes from './ProductDetails.module.css'

import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const params = useParams();
    const products = useSelector(state => state.products)
    const product = products.filter(el => el.id === params.id)[0];
    return <div className={classes['product-details-container']}>
        <div style={{ flex: 1, position: 'relative', width: '100%', height: '100%', padding: '2rem', textAlign: 'center', margin: '0 auto' }}><img style={{ width: '100%' }} src={product.images[0]} /></div>
        <div style={{ flex: 1, display: 'flex', gap: '2rem', width: '100%', height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
            <div style={{ fontSize: '3rem', fontWeight: '600', textAlign: 'left' }}>{product.title}</div>
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '5rem', fontWeight: '600', color: 'green' }}>{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
                <div style={{ fontSize: '1.3rem' }}> + Shipping & Import Fees</div>
            </div>
            <div style={{ fontSize: '2rem', textAlign: 'left' }}>{product.description}</div>
            <div style={{ textAlign: 'left', width: '100%' }}>
                <h1 style={{ fontSize: '3rem', textAlign: 'left' , marginBottom:'1rem'}}>Specification</h1>
                <div style={{ fontSize: '2rem', textAlign: 'left', marginBottom:'1rem' }}><span style={{fontSize: '2rem', textAlign: 'left', fontWeight: '600'}}>Brand: </span>{product.brand}</div>
                <div style={{ fontSize: '2rem', textAlign: 'left', marginBottom:'1rem' }}><span style={{fontSize: '2rem', textAlign: 'left', fontWeight: '600'}}>Model: </span>{product.model}</div>
                <div style={{ fontSize: '2rem', textAlign: 'left', marginBottom:'1rem' }}><span style={{fontSize: '2rem', textAlign: 'left',fontWeight: '600'}}>Color: </span> {product.color}</div>
                <div style={{ fontSize: '2rem', textAlign: 'left', marginBottom:'1rem' }}><span style={{fontSize: '2rem', textAlign: 'left',fontWeight: '600'}}>Available Qty: </span> {product.availableQty}</div>
            </div>

            {/* Body	1-Piece Lightweight Mahogany with 2-Piece Figured Maple Top
Neck	Solid Mahogany
Neck Shape	Chunky C Shape
Fingerboard	Indian Rosewood
Scale	24.75"
Radius	12"
Frets	22
Nut	Nylon
Nut Width	1.687"
Pickups	Custombucker Alnico 3 Set
Controls	2 Volume, 2 Tone, CTS 500K Audio Taper Potentiometers, Paper-in-Oil Capacitors
Bridge	ABR-1
Tuners	Kluson Single Line, Single Ring */}
        </div>
    </div>
}

export default ProductDetails;