import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import TopMenu from './components/TopMenu';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopMenu />
        </div>
      </Router>
    );
  }
}

export default App;
