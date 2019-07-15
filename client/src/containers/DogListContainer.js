import React, { Component } from 'react';
import DogList from '../components/DogList'
import DogDetail from '../components/DogDetail'

class DogListContainer extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchDogs()
  }

  handleClick(e, id) {
    e.preventDefault()
    this.props.fetchDog(this.props.dogs, id)
  }

  render() {
        console.log('DogListContainer: ', this.props)
    return (
      <div>
        <div className="split-screen">
          <DogList dogs={this.props.dogs} handleClick={this.handleClick}/>
        </div>
        <div className="split-screen">
          <div className="dog-details">
            <DogDetail dog={this.props.dogs.currentDog} />
          </div>
        </div>
      </div>
    )
  }
}

export default DogListContainer
