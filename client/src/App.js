import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import { connect } from 'react-redux'
import Home from './components/Home'
import DogListContainer from './containers/DogListContainer'
import ShelterListContainer from './containers/ShelterListContainer'
import {fetchDogs, fetchDog} from './actions/dogActions'
import {fetchShelters, fetchShelter} from './actions/shelterActions'

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
            <h2>Fetch My Corgi!</h2>
          </div>
          <div className="App-intro">
            <Link to="/">Home</Link>
            <Link to="/dogs">Dogs</Link>
            <Link to="/shelters">Shelters</Link>
          </div>
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/dogs" render={(props) => <DogListContainer{...props} fetchDogs={this.props.fetchDogs} fetchDog={this.props.fetchDog} dogs={this.props.dogs}/>} />
        <Route path="/shelters" render={(props) => <ShelterListContainer{...props} fetchShelters={this.props.fetchShelters} fetchShelter={this.props.fetchShelter} shelters={this.props.shelters} />} />
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
    fetchDog: (dogs, id) => {
      dispatch(fetchDog(dogs, id))
    },
    fetchShelters: () => {
      dispatch(fetchShelters())
    },
    fetchShelter: (shelters, id) => {
      dispatch(fetchShelter(shelters, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
