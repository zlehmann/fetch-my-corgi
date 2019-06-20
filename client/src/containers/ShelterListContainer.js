import React, { Component } from 'react';
import ShelterList from '../components/ShelterList'

class ShelterListContainer extends Component {

  componentDidMount() {
    this.props.fetchShelters()
  }

  render() {
    return (
      <div>
        <div className="split-screen">
          <ShelterList shelters={this.props.shelters} />
        </div>
        <div className="split-screen">
          <p> some other stuff</p>
        </div>
      </div>
    )
  }
}

export default ShelterListContainer
