import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import ProductList from './components/productList';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/products" component={ProductList} />
      </div>
    </Router>
  );
};

export default App;
