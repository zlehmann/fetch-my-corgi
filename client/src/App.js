import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Dogs from './components/Dogs'
import Shelters from './components/Shelters'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            <Link to="/dogs">Dogs</Link>
            <Link to="/shelters">Shelters</Link>
          </p>
        </div>

        <Route path="/dogs" component={Dogs} />
        <Route path="/shelters" component={Shelters} />
      </Router>
    );
  }
}

export default App;
