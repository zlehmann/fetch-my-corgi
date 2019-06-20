import React, { Component } from 'react';
import Shelter from './Shelter'

class ShelterList extends Component {
  handleClick(e, url) {
    e.preventDefault()
    window.open(url, "_blank")
  }

  render() {
    const shelterList = this.props.shelters.shelters || []
    return (
      <div className="shelter-list">
        {shelterList.map(shelter => <Shelter key={shelter.id} shelter={shelter} />)}
      </div>
    )
  }
}

export default ShelterList
