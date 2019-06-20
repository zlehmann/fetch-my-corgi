import React, { Component } from 'react';

class Dog extends Component {
  handleClick(e, url) {
    e.preventDefault()
    window.open(url, "_blank")
  }

  render() {
    const dog = this.props.dog
    return (
      <div>
        <a href="#" value={dog.url} onClick={(e) => {this.handleClick(e, dog.url)}}>
          <img src={dog.imageURL} alt=""/>
          <h3>{dog.name}</h3>
          <p>other information</p>
        </a>
      </div>
    )
  }
}

export default Dog
