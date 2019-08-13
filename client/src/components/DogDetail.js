import React, { Component } from 'react';

class DogDetail extends Component {

  render() {
    let description = this.props.dog.description

    let btnText = ""
    if(this.props.dog.fav === true) {
      btnText = "Remove from Favorites"
    } else {
      btnText = "Add to Favorites"
    }

    if (this.props.dog.id === undefined) {
      return (
        <div>
          <h2>Select a dog to view more information!</h2>
        </div>
      )
    } else {
      return (
        <div>
          <h2>{this.props.dog.name}</h2>
          <img src={this.props.dog.imageURL} alt=""/>
          <p><b>Description:</b> {description}</p>
          <button value={btnText} onClick={(e) => {this.props.handleFavorite(e, this.props.dog.id)}}>{btnText}</button>
        </div>
      )
    }
  }
}

export default DogDetail
