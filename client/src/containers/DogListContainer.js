import React, { Component } from 'react';
import DogList from '../components/DogList'

class DogListContainer extends Component {

  componentDidMount() {
    this.props.fetchDogs()
  }

  render() {
    return (
      <div>
        <DogList dogs={this.props.dogs} />
      </div>
    )
  }
}

export default DogListContainer
