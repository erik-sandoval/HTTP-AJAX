import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import Friends from './Components/Friends';
import FriendForm from './Components/FriendForm';


const AppDiv = styled.div`
width: 70%;
margin: 0 auto;

`

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

  addFriend = newFriend => {
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => {
        this.setState({
          friends: res.data
        })

        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateFriend = updatedFriend => {
    axios
      .put(`http://localhost:5000/friends/${updatedFriend.id}`, updatedFriend)
      .then(res => {

      })
      .catch(err=> {

      })
  }


  render() {

    return (
      <AppDiv>
        <h1>Hello</h1>
        <Link to='/'>Home</Link>
        <Route exact path='/' render={() => <Friends friends={this.state.friends} />} />
        <Route path='/add-friend' render={() => <FriendForm friends={this.state.friends} addFriend={this.addFriend}/>}/>
      </AppDiv>
    );
  }
}

export default App;
