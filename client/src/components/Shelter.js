import React, { Component } from 'react';

class Shelter extends Component {
  render() {
    const shelter = this.props.shelter
    return (
      <div className="shelter-card" id={shelter.id} onClick={(e) => {this.props.handleClick(e, shelter.id)}}>
        <a href="#" value={shelter.url}>
          <h3>{shelter.name}</h3>
          <p>{shelter.address}</p>
          <p>{shelter.city}, {shelter.state}</p>
        </a>
      </div>
    )
  }
}

export default Shelter
