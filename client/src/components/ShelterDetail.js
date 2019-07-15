import React, { Component } from 'react';

class ShelterDetail extends Component {

  render() {
    console.log('ShelterDetail props: ', this.props)
    return (
      <div className="shelter-detail">
        <h2>{this.props.shelter.name}</h2>
        <p>{this.props.shelter.address}</p>
        <p>{this.props.shelter.city}, {this.props.shelter.state}</p>
      </div>
    )
  }
}

export default ShelterDetail
