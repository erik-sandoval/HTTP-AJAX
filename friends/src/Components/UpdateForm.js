import React from 'react'

class UpdateForm extends React.Component {

    state = {
        friend: this.props.friend.active
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
        this.props.updateFriend(this.state.friend)
        this.props.history.push('/')
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Name: <input
                    onChange={this.handleChange}
                    name="name"
                    value={this.state.friend.name}
                    type="string">
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
                <button>Update Friend</button>
            </form>
        )
    }
}

export default UpdateForm
