import Products from "./Products/Products";
import Promotions from "./Promotions/Promotions";
import AddItemForSale from "../Forms/AddItemForSaleForm/AddItemForSale";
import classes from "./Shop.module.css";
import useSelector from "@reduxjs/toolkit"
import { useState } from "react";
import { BiChevronRight } from 'react-icons/bi'

let MOCK_PROMOTIONS = [1, 2, 3, 4];

const Shop = ({ searchValue }) => {
  return (
    <div className={classes["shop-container"]}>
      {/* <AddItemForSale/> */}
      {/* <Promotions promotions={MOCK_PROMOTIONS} /> */}
      <>
      {/* <div style={{ display: 'flex', gap: '1rem' }}>
          <div>Guitars</div>
          <div>Keyboards & Synths</div>
          <div>Studio Gear</div>
          <div>Drums</div>
          <div>Other</div>
        </div> */}

        <div style={{ color: '#555', fontWeight: 600, fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>Electric Guitars</div>
        
        
        <Products searchValue={searchValue} />
      </>
    </div>
  );
};

export default Shop;
