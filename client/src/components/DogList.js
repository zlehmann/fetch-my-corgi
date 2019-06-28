import React, { Component } from 'react';
import Dog from './Dog'
import DogDetail from './DogDetail'

class DogList extends Component {
  handleClick(e, url) {
    e.preventDefault()
    window.open(url, "_blank")
  }

  dog_click () {
    console.log('hit')
  }

  render() {
    const dogList = this.props.dogs.dogs || []
    return (
      <div>
        <div className="dog-list">
          {dogList.map(dog => <Dog key={dog.id} dog={dog} />)}
        </div>
        <div className="dog-details">
          <DogDetail dog={this.dog_click} />
        </div>
      </div>
    )
  }
}

export default DogList
