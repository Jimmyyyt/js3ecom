import actiontypes from '../actiontypes';
import axios from 'axios'

export const addToCart = (productId, qty) => async(dispatch, getState) => {
  const {data} = await axios.get(`http://localhost:9999/api/products/${productId}`)
  dispatch({
    type: actiontypes().cart.add,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({type: actiontypes().cart.remove, payload: productId})
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
