import { combineReducers } from 'redux';

import productCatalogReducer from './productCatalogReducer';
import cartReducer from './cartReducer';
import { userRegisterReducer, userSigninReducer } from './userReducer';
import productDetailsReducer from './productDetailsReducer.js'




export default combineReducers({
  productCatalog: productCatalogReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer


})