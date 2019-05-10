import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import FriendCard from './FriendCard'

const FriendsDiv = styled.div`
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction:column;
`

const Friends = (props) => {
    return (
        <FriendsDiv>
            <Link to="/add-friend">Add Friend</Link>
            {props.friends.map(friend => (
                <FriendCard key={friend.id} friend={friend} />
            ))}
        </FriendsDiv>
    )
}

export default Friends