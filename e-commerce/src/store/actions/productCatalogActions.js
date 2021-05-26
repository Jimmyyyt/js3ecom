import axios from 'axios';
import actiontypes from '../actiontypes';
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from '../productConstants';

export const getProductCatalog = () => {
  return async dispatch => {
    const res = await axios.get('http://localhost:9999/api/products')
    dispatch(setProducts(res.data))
  }
}

export const setProducts = products => {
  return {
    type: actiontypes().productCatalog.set,
    payload: products
  }
}

export const detailsProduct = (productId) => async dispatch => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
  try {
    const { data } = await axios.get(`http://localhost:9999/api/products/${productId}`)
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.res && error.res.data.message ? error.res.data.message : error.message })
  }
}

export const loading = (bool) => {
  return {
    type: actiontypes().loading,
    payload: bool
  }
}