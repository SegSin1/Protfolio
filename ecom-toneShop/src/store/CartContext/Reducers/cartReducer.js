export const INITIAL_STATE = {
  totalAmount: 0,
  items: [],
  totalQty: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: payload.items,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: payload.items,
      };
    case "PRICE_UPDATE":
      return { ...state, total: payload.total };

    default:
      throw new Error(
        `unrecognized type ${type} was used. please add ${type} if you intend to use it!`
      );
  }
};

export default cartReducer;
