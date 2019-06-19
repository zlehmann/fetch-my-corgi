import React, { Component } from 'react';

class Dogs extends Component {

  render() {
    console.log('props: ', this.props)
    return(
      <div>
        <h2>Dogs will get listed here.</h2>
      </div>
    )
  }
}

export default Dogs
