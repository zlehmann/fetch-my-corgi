import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import DogList from './components/DogList'
import Shelters from './components/Shelters'
import fetchDogs from './actions/dogActions'
import FetchButton from './components/FetchButton'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      dogs: [],
      shelters: []
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            <FetchButton fetchDogs={this.props.fetchDogs}/>
            <Link to="/dogs">Dogs</Link>
            <Link to="/shelters">Shelters</Link>
          </p>
        </div>
        <div>
          <h2>Add some intro text</h2>
        </div>

        <Route path="/dogs" render={(props) => <DogList{...props} dogs={this.props.dogs} />} />
        <Route path="/shelters" component={Shelters} />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    dogs: state.dogs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDogs: () => {
      dispatch(fetchDogs())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
