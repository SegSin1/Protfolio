import React, { createContext, Provider, useReducer } from "react";
import cartReducer, { INITIAL_STATE } from "./Reducers/cartReducer";

const cartCtx = createContext(INITIAL_STATE);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const addToCart = (product) => {
    let updatedCartItems = [...state.items];
    state.totalQty++;
    state.totalAmount += product.price;
    const existingProduct = state.items.find(
      (existingProduct) => existingProduct.id === product.id
    );
    if (!existingProduct) {
      product.cartQty = 1;
      product.cartAmount = product.price;
      updatedCartItems = [...state.items, product];
    } else {
      existingProduct.cartQty++;
      existingProduct.cartAmount += existingProduct.price;
      updatedCartItems = [...state.items];
    }
    dispatch({ type: "ADD_TO_CART", payload: { items: updatedCartItems } });
  };
  const removeFromCart = (product) => {
    let updatedCartItems = [...state.items];
    if (state.totalQty > 0) {
      state.totalQty--;
      state.totalAmount -= product.price;
    }
    if (product.cartQty > 0) {
      product.cartQty--;
      product.cartAmount -= product.price;
    }
    if (product.cartQty === 0)
      updatedCartItems = state.items.filter((item) => product.id === item.id);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { items: updatedCartItems },
    });
  };

  const value = {
    addToCart,
    removeFromCart,
    cart: state,
  };

  return <cartCtx.Provider value={value}>{children}</cartCtx.Provider>;
};

export default cartCtx;
