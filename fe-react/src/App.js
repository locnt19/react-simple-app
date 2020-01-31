import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import { CartProvider } from './contexts/Cart';
import TopMenu from './components/TopMenu';

import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import NotFound from './pages/404';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <CartProvider>
        <Router>
          <div className="App">
            <TopMenu />
            <div className="App-content">
              <Switch>
                <Route path="/" exact><h1>Home page</h1></Route>
                <Route path="/products" exact component={Products} />
                <Route path="/product/:id" exact component={ProductDetail} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/login" exact component={Login} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </CartProvider>
    );
  }
}

export default App;
