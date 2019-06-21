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
      <div>
        <div className="dog-list">
          {dogList.map(dog => <Dog key={dog.id} dog={dog} />)}
        </div>
        <div className="dog-details">
        </div>
      </div>
    )
  }
}

export default DogList
