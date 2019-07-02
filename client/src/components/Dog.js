import React, { Component } from 'react';

class Dog extends Component {
  render() {
    const dog = this.props.dog
    return (
      <div className="dog-card" id={dog.id} onClick={(e) => {this.props.handleClick(e, dog.id)}}>
        <a href="#" value={dog.url}>
          <h3>{dog.name}</h3>
          <img src={dog.imageURL} alt="" height="150"/>
        </a>
      </div>
    )
  }
}

export default Dog
