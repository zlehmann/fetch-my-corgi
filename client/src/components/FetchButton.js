import React, { Component } from 'react';

class FetchButton extends Component {

  render() {
    return(
      <button onClick={this.props.fetchDogs}>Fetch!</button>
    )
  }
}

export default FetchButton
