import types from "../types";

const initial = {
  items: [],
};

const cartReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.ADD_PRODUCT:
      return {
        ...state,
        items: [...state.items, payload.product],
      };

    case types.DELETE_PRODUCT:
      return {
        ...state,
        items: state.items.filter((el) => el.shId !== payload.id),
      };
    case types.INCREMENT_QUANTITY:
      // console.log(payload);
      return {
        ...state,
        items: [
          ...state.items.map((item) =>{
          console.log(item.selectedQuantity)
        return    item.shId === payload.id ?item : item}
          ),
        ],
      };
    default:
      return state;
  }
};

export default cartReducer;
