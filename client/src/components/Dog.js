import React, { Component } from 'react';

class Dog extends Component {
  handleClick(e, url) {
    e.preventDefault()
    let data = fetch(url)
    .then(response => response.json())
    console.log(data)
  }

  render() {
    const dog = this.props.dog
    return (
      <div className="dog-card">
        <a href="#" value={dog.url} onClick={(e) => {this.handleClick(e, dog.url)}}>
          <h3>{dog.name}</h3>
          <img src={dog.imageURL} alt="" height="150" />
        </a>
      </div>
    )
  }
}

export default Dog
