import React, { Component } from 'react';

class Shelter extends Component {
  handleClick(e, url) {
    e.preventDefault()
    let data = fetch(url)
    .then(response => response.json())
    console.log(data)
  }

  render() {
    const shelter = this.props.shelter
    return (
      <div className="shelter-card">
        <a href="#" value={shelter.url} onClick={(e) => {this.handleClick(e, shelter.url)}}>
          <h3>{shelter.name}</h3>
          <p>{shelter.city}</p>
          <p>{shelter.state}</p>
        </a>
      </div>
    )
  }
}

export default Shelter
