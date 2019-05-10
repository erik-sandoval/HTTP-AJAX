import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import Friends from './Components/Friends';
import FriendForm from './Components/FriendForm';
import UpdateForm from './Components/UpdateForm';


const AppDiv = styled.div`
width: 70%;
margin: 0 auto;

`

class App extends React.Component {

  state = {
    active: '',
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
        this.setState({
          friends: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  setActiveFriend = friend => {
    this.setState({
      active: friend
    })
  }


  render() {
    return (
      <AppDiv>
        <h1>Hello</h1>
        <Link to='/'>Home</Link>
        <Route exact path='/' render={props => <Friends {...props} friends={this.state.friends} setActiveFriend={this.setActiveFriend} />} />
        <Route path='/add-friend' render={props => <FriendForm {...props} friends={this.state.friends} addFriend={this.addFriend} />} />
        <Route path='/update-friend' render={props => <UpdateForm {...props} friend={this.state} updateFriend={this.updateFriend} />} />
      </AppDiv>
    );
  }
}

export default App;
