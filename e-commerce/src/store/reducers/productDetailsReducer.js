import actiontypes from '../actiontypes';

const initState = {
  product: null,
  loading: true
};

const productDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    
    case actiontypes().productDetails.request:
      return {
        ...state,
        loading: true
      };
    case actiontypes().productDetails.success:
      return {
        ...state,
        loading: false,
        product: action.payload
      }
    case actiontypes().productDetails.fail:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default productDetailsReducer;