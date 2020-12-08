import types from '../types';

export const addProductAction = data => ({
  type: types.ADD_PRODUCT,
  payload: {
    product: data,
  },
});

export const deleteProductAction = id => {
  return {
    type: types.DELETE_PRODUCT,
    payload: {
      id,
    },
  };
};
export const incrementQuantity = id => {
  return {
    type: types.INCREMENT_QUANTITY,
    payload: {
      id,
    },
  };
};
export const decrementQuantity = id => {
  return {
    type: types.DECREMENT_QUANTITY,
    payload: {
      id,
    },
  };
};