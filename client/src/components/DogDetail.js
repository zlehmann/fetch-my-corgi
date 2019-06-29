import React, { Component } from 'react';

class DogDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dog: {}
    }
  }

  fetch_dog() {
    let url = `/api/dogs/${this.props.dog_id}`
    fetch(url).then(response => response.json())
    .then(response => this.setState({dog: response}))
  }

  render() {
    this.fetch_dog()
    let description = ""
    if (this.state.dog.description != "") {
      description = this.state.dog.description
    }
    return (
      <div>
        <h2>{this.state.dog.name}</h2>
        <img src={this.state.dog.imageURL} alt=""/>
        <p>{description}</p>
      </div>
    )
  }
}

export default DogDetail
