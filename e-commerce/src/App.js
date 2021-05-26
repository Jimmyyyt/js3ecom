import './App.css';
import { BrowserRouter,  Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import HomeScreen from './views/HomeScreen';
import ProductScreen from './views/ProductScreen';
import CartScreen from './views/CartScreen';
import { useSelector } from 'react-redux';
import Signin from './views/Signin';


function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

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
          <Link to="/signin">Sign In</Link>
        </div>
      </header>
      <main>
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/signin" component={Signin} />
        <Route path="/" component={HomeScreen} exact></Route>

      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>

  );
}




export default App;
