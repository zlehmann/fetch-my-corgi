import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import { connect } from 'react-redux'
import Home from './components/Home'
import DogListContainer from './containers/DogListContainer'
import ShelterListContainer from './containers/ShelterListContainer'
import {fetchDogs, fetchDog} from './actions/dogActions'
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
            <img src="https://png2.kisspng.com/sh/be55db089fa111b9525f26220f7a8784/L0KzQYm3WcI5N6NAjJH0aYP2gLBuTgBmdZN3h91uLYfofMTvTfNwephuRdVqcnTsd7L1TgdmdKRtRdV4cnfsPcT7ifNsbaMye9H7Z3n2PbPsgBF2e5Yygd82c3HnPYbpgfRjOWE6fac5YUa6PomBUsQzOGU8Sac8OEGzSYi3Uck0QGMziNDw/kisspng-pembroke-welsh-corgi-cardigan-welsh-corgi-sticker-corgis-because-im-sad-5badb105e50a67.8824204715381097019382.png" className="App-logo" alt="logo" align="left"/>
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
        <Route path="/shelters" render={(props) => <ShelterListContainer{...props} fetchShelters={this.props.fetchShelters} shelters={this.props.shelters} />} />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    dogs: state.dogs,
    shelters: state.shelters,
    //current_shelter: state.current_shelter
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
