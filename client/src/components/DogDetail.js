import React, { Component } from 'react';

class DogDetail extends Component {

  render() {
    let description = ""
    if (this.props.dog.description !== "") {
      description = this.props.dog.description
    }
    console.log('detail dog: ', this.props.dog.fav)
    return (
      <div>
        <h2>{this.props.dog.name}</h2>
        <img src={this.props.dog.imageURL} alt=""/>
        <p>{description}</p>
        <p>{this.props.dog.fav}</p>
        <button onClick={(e) => {this.props.handleFavorite(e, this.props.dog.id)}}>Add to favorites</button>
      </div>
    )
  }
}

export default DogDetail
