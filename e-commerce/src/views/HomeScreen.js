import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Products from '../components/Products';
import { getProductCatalog } from '../store/actions/productCatalogActions'

const HomeScreen = () => {

  const dispatch = useDispatch();
  const productCatalog = useSelector(state => state.productCatalog)

  useEffect(() => {
    dispatch(getProductCatalog())
  }, [dispatch])

  return (
    <div>
      <div className="row center">
        {productCatalog && productCatalog.map((product) => (
        <Products key={product._id} product={product} />

        ))}
      </div>
    </div>
  )
}

export default HomeScreen
