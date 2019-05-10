import React from 'react'
import styled from 'styled-components'

const FriendCardDiv = styled.div`
border: 1px solid black;
margin: 1%;
width: 30%;
`

const FriendCard = props => {
    const updateFriend = event => {
        event.preventDefault();
        props.setActiveFriend(props.friend)
        props.history.push('/update-friend')
    }

    const deleteFriend = event => {
        event.preventDefault();
        props.deleteFriend(props.friend)
    }

    return (
        <FriendCardDiv>
            <h1>Name: {props.friend.name}</h1>
            <h3>Age: {props.friend.age}</h3>
            <h3>Contact: <a href={`mailto: ${props.friend.email}`}>{props.friend.email}</a></h3>
            <button onClick={updateFriend}>Update Friend</button>
            <button onClick={deleteFriend}>Delete Friend</button>
        </FriendCardDiv>
    )
}

export default FriendCard