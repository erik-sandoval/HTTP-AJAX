import React from 'react'

const FriendCard = props => {
    console.log(props)
    return (
        <div>
            <h1>Name: {props.friend.name}</h1>
            <h3>Age: {props.friend.age}</h3>
            <h3>Contact: <a href={`mailto: ${props.friend.email}`}>{props.friend.email}</a></h3>
        </div>
    )
}

export default FriendCard