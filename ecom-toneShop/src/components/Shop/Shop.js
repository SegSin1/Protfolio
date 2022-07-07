import Products from "./Products/Products";
import Promotions from "./Promotions/Promotions";
import AddItemForSale from "../Forms/AddItemForSaleForm/AddItemForSale";
import classes from "./Shop.module.css";
import useSelector from "@reduxjs/toolkit"

let MOCK_PROMOTIONS = [1, 2, 3, 4];

const Shop = () => {
  return (
    <div className={classes["shop-container"]}>
      {/* <AddItemForSale/> */}
      {/* <Promotions promotions={MOCK_PROMOTIONS} /> */}
      <Products />
    </div>
  );
};

export default Shop;
