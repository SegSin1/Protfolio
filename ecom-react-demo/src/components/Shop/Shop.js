import Products from "./Products/Products";
import Promotions from "./Promotions/Promotions";

import classes from './Shop.module.css'

let MOCK_PRODUCTS = [1, 2, 3, 4,5,6,7,8,9,10,11];
let MOCK_PROMOTIONS = [1, 2, 3, 4, 5];

const Shop = () => {
  return (
    <div className={classes['shop-container']}>
      <Promotions promotions={MOCK_PROMOTIONS}/>
      <Products products={MOCK_PRODUCTS}/>
    </div>
  );
};

export default Shop;