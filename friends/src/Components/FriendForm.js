import React from 'react'

class FriendForm extends React.Component {

    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    }

    componentDidMount() {
        this.setState({
            friends: this.props.friends
        })
    }

    handleChange = event => {

        const name = event.target.name
        const value = event.target.value

        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [name]: value
            }
        }))

    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addFriend(this.state.friend)

        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }

    render() {
        console.log(this.state.friends)
        return (
            <form onSubmit={this.handleSubmit}>
                Name: <input
                    onChange={this.handleChange}
                    name="name"
                    value={this.state.friend.name}
                    type="text">
                </input>
                Age: <input
                    onChange={this.handleChange}
                    name="age"
                    value={this.state.friend.age}
                    type="number">
                </input>
                Contact: <input
                    onChange={this.handleChange}
                    name="email"
                    value={this.state.friend.email}
                    type="string">
                </input>
                <button>Add Friend</button>
            </form>
        )
    }
}

export default FriendForm

