import React, { Component } from 'react';
import Shelter from './Shelter'

class ShelterList extends Component {
  render() {
    const shelterList = this.props.shelters.shelters || []
    return (
      <div className="shelter-list">
        {shelterList.map(shelter => <Shelter key={shelter.id} shelter={shelter} handleClick={this.props.handleClick}/>)}
      </div>
    )
  }
}

export default ShelterList
