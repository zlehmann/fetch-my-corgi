import React, { Component } from 'react';
import Dog from './Dog'

class DogList extends Component {
  handleClick(e, url) {
    e.preventDefault()
    window.open(url, "_blank")
  }

  render() {
    const dogList = this.props.dogs.dogs || []
    return (
      <div className="dog-list">
        {dogList.map(dog => <Dog key={dog.id} dog={dog} />)}
      </div>
    )
  }
}

export default DogList
