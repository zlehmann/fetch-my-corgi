import React, { Component } from 'react';

class DogDetail extends Component {

  render() {
    let description = ""
    if (this.props.dog.description !== "") {
      description = this.props.dog.description
    }

    return (
      <div>
        <h2>{this.props.dog.name}</h2>
        <img src={this.props.dog.imageURL} alt=""/>
        <p>{description}</p>
      </div>
    )
  }
}

export default DogDetail
