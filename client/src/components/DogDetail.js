import React, { Component } from 'react';

class DogDetail extends Component {

  render() {
    let description = "no description available."
    if (this.props.dog.description !== "") {
      description = this.props.dog.description
    }

    let btnText = ""
    if(this.props.dog.fav === true) {
      btnText = "Remove from Favorites"
    } else {
      btnText = "Add to Favorites"
    }

    return (
      <div>
        <h2>{this.props.dog.name}</h2>
        <img src={this.props.dog.imageURL} alt=""/>
        <p>Description: {description}</p>
        <button value={btnText} onClick={(e) => {this.props.handleFavorite(e, this.props.dog.id)}}>{btnText}</button>
      </div>
    )
  }
}

export default DogDetail
