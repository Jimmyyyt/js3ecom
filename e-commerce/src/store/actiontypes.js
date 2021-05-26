


const actiontypes = () => {
  return  {
    productCatalog: {
      set: 'SET_PRODUCT_CATALOG'
    },
    productDetails: {
      request: 'PRODUCT_DETAILS_REQUEST',
      success: 'PRODUCT_DETAILS_SUCCESS',
      fail: 'PRODUCT_DETAILS_FAIL',
      loading: 'PRODUCT_DETAILS_LOADING'
    },
    cart: {
      add: 'ADD_TO_CART',
      remove: 'REMOVE_FROM_CART',
      delete: 'DELETE_PRODUCT'

    }
  }
}

export default actiontypes;