import React, { Component } from 'react';
import DogList from '../components/DogList'
import DogDetail from '../components/DogDetail'

class DogListContainer extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleFavorite = this.handleFavorite.bind(this)
  }

  componentDidMount() {
    this.props.fetchDogs()
  }

  handleClick(e, id) {
    e.preventDefault()
    this.props.fetchDog(this.props.dogs, id)
  }

  handleFavorite(e, id) {
    e.preventDefault()
    this.props.toggleFav(this.props.dogs, id)
  }

  render() {
    return (
      <div>
        <div className="split-screen">
          <DogList dogs={this.props.dogs} updateBackend={this.props.updateBackend} handleClick={this.handleClick}/>
        </div>
        <div className="split-screen">
          <div className="dog-details">
            <DogDetail dog={this.props.dogs.currentDog} handleFavorite={this.handleFavorite}/>
          </div>
        </div>
      </div>
    )
  }
}

export default DogListContainer
