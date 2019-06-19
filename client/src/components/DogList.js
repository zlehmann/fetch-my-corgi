import React, { Component } from 'react';

class DogList extends Component {

  render() {
    console.log('props: ', this.props.dogs)
    return(
      <div>
        <h2>Dogs will get listed here.</h2>
      </div>
    )
  }
}

export default DogList
