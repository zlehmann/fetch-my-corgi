import React, { Component } from 'react';
import Dog from './Dog'

class DogList extends Component {
  render() {
    const dogList = this.props.dogs.dogs || []
    return (
      <div className="dog-list-wrapper">
        <div className="update-backend">
          <button onClick={this.props.update_backend}>Update Corgis!</button>
        </div>
        <div className="dog-list">
          {dogList.map(dog => <Dog key={dog.id} dog={dog} handleClick={this.props.handleClick}/>)}
        </div>
      </div>
    )
  }
}

export default DogList
