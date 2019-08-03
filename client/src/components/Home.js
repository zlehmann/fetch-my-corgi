import React, { Component } from 'react';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {value: '', comments: []}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      comments: [...this.state.comments, this.state.value]
    })
  }

  render (){
    console.log(this.state)
    return(
      <div className="welcome-splash">
        <h2>Welcome to Fetch My Corgi!</h2>
        <p>Fetch my Corgi pulls all of the latest corgi adoption posts from the Petfinder API to
        give you the most efficient way of finding a corgi to adopt!</p>
        <img src="https://i.imgur.com/jIF8Wbj.gif" alt="corgi-wave"/>
      </div>

    )
  }

}

export default Home
