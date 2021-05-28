import './App.css';
import { BrowserRouter,  Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import HomeScreen from './views/HomeScreen';
import ProductScreen from './views/ProductScreen';
import CartScreen from './views/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import Signin from './views/Signin';
import { signout } from './store/actions/userActions';
import Register from './views/Register';
import ShippingAddress from './views/ShippingAddress';


function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout)
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">
            Nisses Elbutik
          </Link>
        </div>
        <div>
          <Link to="/cart">
            Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
          </Link>
          {userInfo ? (
              <div className="dropdown">
                <Link to="#">{userInfo.name} <i className=" fa fa-caret-down"></i></Link>
                <ul className="dropdown-content">
                  <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                </ul>
              </div>
                ) : (
                <Link to="/signin">Sign In</Link>

            )
          }
        </div>
      </header>
      <main>
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/signin" component={Signin} />
        <Route path="/register" component={Register} />
        <Route path="/shipping" component={ShippingAddress} />
        <Route path="/" component={HomeScreen} exact></Route>

      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>

  );
}




export default App;
