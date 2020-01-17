import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import TopMenu from './components/TopMenu';
import Products from './pages/Products';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopMenu />
          <Route path="/products" component={Products} />
        </div>
      </Router>
    );
  }
}

export default App;
