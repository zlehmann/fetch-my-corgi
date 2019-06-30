import React, { Component } from 'react';
import DogList from '../components/DogList'
import DogDetail from '../components/DogDetail'

class DogListContainer extends Component {
  _isMounted = false;

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      currentDog: {}
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchDogs()
  }

  handleClick(e, id) {
    e.preventDefault()
    let url = `/api/dogs/${id}`
    if (this._isMounted) {
      fetch(url).then(response => response.json())
      .then(response => this.setState({currentDog: response}))
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        <div className="split-screen">
          <DogList dogs={this.props.dogs} handleClick={this.handleClick}/>
        </div>
        <div className="split-screen">
          <div className="dog-details">
            <DogDetail dog={this.state.currentDog} />
          </div>
        </div>
      </div>
    )
  }
}

export default DogListContainer
