import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../components/Rating';

import { detailsProduct } from '../store/actions/productCatalogActions';



const ProductScreen = (props) => {

  const dispatch = useDispatch();
  const productId = props.match.params.id
  const [qty, setQty] = useState(1);
  const productDetails = useSelector(state => state.productDetails);

  const { product } = productDetails

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId])
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId} ? qty=${qty}`);
  }

  if(!product) {
    return <div>Product Not Found</div>
  }

  return product && (
    <div>

      <Link to="/">Back to home</Link>
      <div className="row top">
        <div className="col-2">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
            </li>
            <li>Price : ${product.price}</li>
            <li>
              Description:
              <p>{product.desc}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">{product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>{product.countInStock > 0
                    ? <span className="success">In Stock</span>
                    : <span className="error">Unavailable</span>
                  }
                  </div>
                </div>
              </li>
              {
                product.countInStock > 0 && (
                  <>
                  <li>
                    <div className="row">
                      <div>Qty</div>
                      <div>
                        <select value={qty} onChange={e => setQty(e.target.value)}>
                          {
                            [...Array(product.countInStock).keys()].map(x => (
                              <option key={x + 1} value={x + 1}>{x + 1}</option>
                            ))
                          }
                        </select>
                      </div>
                    </div>
                  </li>
                    <li>
                      <button onClick={addToCartHandler} className="primary block">Add to cart</button>
                    </li>
                  </>

                )
              }

            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductScreen
