import React, { Component } from 'react';
import DogList from '../components/DogList'
import DogDetail from '../components/DogDetail'

class DogListContainer extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      currentDog: 1
    }
  }

  componentDidMount() {
    this.props.fetchDogs()
  }

  handleClick(e, id) {
    e.preventDefault()
    this.setState({currentDog: id})
    console.log(this.state.currentDog)
  }

  render() {
    return (
      <div>
        <div className="split-screen">
          <DogList dogs={this.props.dogs} handleClick={this.handleClick}/>
        </div>
        <div className="split-screen">
          <div className="dog-details">
            <DogDetail dog_id={this.state.currentDog} />
          </div>
        </div>
      </div>
    )
  }
}

export default DogListContainer
