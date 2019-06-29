import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Home from './components/Home'
import DogListContainer from './containers/DogListContainer'
import ShelterListContainer from './containers/ShelterListContainer'
import fetchDogs from './actions/dogActions'
import fetchShelters from './actions/shelterActions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      dogs: [],
      shelters: [],
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
            <Link to="/">Home</Link>
            <Link to="/dogs">Dogs</Link>
            <Link to="/shelters">Shelters</Link>
          </p>
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/dogs" render={(props) => <DogListContainer{...props} fetchDogs={this.props.fetchDogs} dogs={this.props.dogs} />} />
        <Route path="/shelters" render={(props) => <ShelterListContainer{...props} fetchShelters={this.props.fetchShelters} shelters={this.props.shelters} />} />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    dogs: state.dogs,
    shelters: state.shelters,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDogs: () => {
      dispatch(fetchDogs())
    },
    fetchShelters: () => {
      dispatch(fetchShelters())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
