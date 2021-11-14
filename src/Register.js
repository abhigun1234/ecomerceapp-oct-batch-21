import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props) {

        super(props)
        this.state = { username: '', password: '' }
    }
    onUserNameChange = (event) => {
        this.setState({ username: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }
    onSubmitForm = (event) => {

        console.log("this.username", this.state.username)
        console.log("this.username", this.state.password)
        event.preventDefault()

    }
    render() {
        return (
            <div>
                <form>
                    <label>Enter User Name</label>
                    <input type="text" value={this.state.username} onChange={this.onUserNameChange}></input>
                    <input type="text" value={this.state.password} onChange={this.onPasswordChange}></input>
                    <button onClick={this.onSubmitForm}>Submit</button>
                </form>
            </div>
        )
    }
}
