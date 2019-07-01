import React, { Component } from 'react';
import ShelterList from '../components/ShelterList'
import ShelterDetail from '../components/ShelterDetail'


class ShelterListContainer extends Component {
  _isMounted = false;

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      currentShelter: {}
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchShelters()
  }

  handleClick(e, id) {
    e.preventDefault()
    let url = `/api/shelters/${id}`
    if (this._isMounted) {
      fetch(url).then(response => response.json())
      .then(response => this.setState({currentShelter: response}))
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        <div className="split-screen">
          <ShelterList shelters={this.props.shelters} handleClick={this.handleClick}/>
        </div>
        <div className="split-screen">
          <ShelterDetail shelter={this.state.currentShelter} />
        </div>
      </div>
    )
  }
  }

export default ShelterListContainer
