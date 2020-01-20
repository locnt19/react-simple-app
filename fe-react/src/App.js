import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import { CartProvider } from './contexts/Cart';
import TopMenu from './components/TopMenu';

import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

class App extends Component {
  render() {
    return (
      <CartProvider>
        <Router>
          <div className="App">
            <TopMenu />
            <div className="App-content">
              <Route path="/products" component={Products} />
              <Route path="/product/:id" component={ProductDetail} />
              <Route path="/cart" component={Cart} />
            </div>
          </div>
        </Router>
      </CartProvider>
    );
  }
}

export default App;
