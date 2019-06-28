import React, { Component } from 'react';

class DogDetail extends Component {
  handleClick(e, url) {
    e.preventDefault()
    window.open(url, "_blank")
  }

  render() {
    const dogList = this.props.dogs.dogs || []
    return (
      <div>
        
      </div>
    )
  }
}

export default DogDetail
