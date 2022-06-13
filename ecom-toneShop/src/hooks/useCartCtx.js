import React, { useContext, useState, useEffect } from "react";
import CartContext from "../store/CartContext/CartContext";

const useCartCtx = () => {
  const ctx = useContext(CartContext);
  if (ctx === undefined)
    throw new Error("useShop can only be used with ShopContext!");
  else return ctx;
};

export default useCartCtx;
