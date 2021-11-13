import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){

        super(props)
        this.state={username:''}
    }
    onUserNameChange=(event)=>{
  this.setState({username:event.target.value})
    }
    onSubmitForm=(event)=>{
        console.log("this.username",this.state.username)

    }
    render() {
        return (
            <div>
                <form>
                    <label>Enter User Name</label>
                    <input type="text" value={this.state.username} onChange={this.onUserNameChange}></input>
                    <button onClick={this.onSubmitForm}></button>
                </form>
            </div>
        )
    }
}
