import React, { Component } from 'react';
import DogList from '../components/DogList'

class DogListContainer extends Component {

  componentDidMount() {
    this.props.fetchDogs()
  }

  render() {
    return (
      <div>
        <div className="split-screen">
          <DogList dogs={this.props.dogs} />
        </div>
        <div className="split-screen">
          <p> some other stuff</p>
        </div>
      </div>
    )
  }
}

export default DogListContainer
