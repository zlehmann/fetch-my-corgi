import React, { Component } from 'react';

class DogList extends Component {

  render() {
    console.log('props: ', this.props.dogs.dogs)
    const dogList = (this.props.dogs.dogs || []).map((dog) =>
        <li key={dog.id}>{dog.name}</li>
      )

    return(
      <div>
        <h2>Dogs will get listed here.</h2>
        <ul>{dogList}</ul>
      </div>
    )
  }
}

export default DogList
