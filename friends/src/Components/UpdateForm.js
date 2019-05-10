import React from 'react'

class UpdateForm extends React.Component {

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

    addFriend = event => {
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
    }

    render() {
        console.log(this.state.friends)
        return (
            <form onSubmit={this.handleSubmit}>
                Name: <input
                    onChange={this.addFriend}
                    name="name"
                    value={this.state.friend.name}
                    type="text">
                </input>
                Age: <input
                    onChange={this.addFriend}
                    name="age"
                    value={this.state.friend.age}
                    type="number">
                </input>
                Contact: <input
                    onChange={this.addFriend}
                    name="email"
                    value={this.state.friend.email}
                    type="string">
                </input>
                <button>Add Friend</button>
            </form>
        )
    }
}

export default UpdateForm
