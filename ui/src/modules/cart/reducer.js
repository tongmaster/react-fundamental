import { ADD_TO_CART } from "./actions";
const initialState = {
  productIds: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action.payload;
      if (state.productIds.includes(productId)) return state;

      return { ...state, productIds: [...state.productIds, productId] };
    default:
      return state;
  }
}
