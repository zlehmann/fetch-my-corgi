import React, { Component } from 'react';

class ShelterDetail extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.shelter.name}</h2>
        <p>{this.props.shelter.address}</p>
        <p>{this.props.shelter.city}, {this.props.shelter.state}</p>
      </div>
    )
  }
}

export default ShelterDetail
