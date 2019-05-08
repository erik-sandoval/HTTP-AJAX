import React from 'react'
import FriendCard from './FriendCard'

const Friends = (props) => {
    return (
        <>
            {props.friends.map(friend => (
                <FriendCard  key={friend.id} friend={friend} />
            ))}
        </>
    )
}

export default Friends