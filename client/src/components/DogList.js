import React, { Component } from 'react';

class DogList extends Component {
  handleClick(e, url) {
    e.preventDefault()
    window.open(url, "_blank")
  }

  render() {
    const dogList = (this.props.dogs.dogs || []).map((dog) =>
        {return (
          <div key={dog.id}>
            <a href="#" value={dog.url} onClick={(e) => {this.handleClick(e, dog.url)}}>
              <img src={dog.imageURL} alt=""/>
              <h3>{dog.name}</h3>
              <p>other information</p>
            </a>
          </div>
        )}
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
