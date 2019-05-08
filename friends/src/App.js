import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import axios from 'axios'

import Friends from './Components/Friends';




class App extends React.Component {

  state = {
    friends: []
  }


  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => {
        this.setState({
          friends: res.data
        })
      })
      .catch(err => {
        console.log(`error: ${err}`)
      })
  }


  render() {

    return (
      <div className="App">
        <h1>Hello</h1>
        <Route path='/' render={(props) => <Friends {...props} friends={this.state.friends} />} />
      </div>
    );
  }
}

export default App;
