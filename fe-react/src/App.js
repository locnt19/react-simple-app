import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import TopMenu from './components/TopMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
      </div>
    );
  }
}

export default App;
