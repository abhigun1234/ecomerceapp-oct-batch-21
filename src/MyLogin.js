import React, { Component } from 'react'

export default class MyLogin extends Component {
    changeUserName=(event)=>{
     console.log("event",event.target.value)

    }
    changePassword=(event)=>{
        console.log("event",event.target.value)
   
       }
       submitData=(event)=>{

       }
    render() {
        return (
            <div>
                <form>
                    <input onChange={this.changeUserName} type="text" placeholder="enter your Name" ></input>   
                    <input onChange={this.changePassword} type="password" placeholder="enter your Password" ></input>   
                    <button onClick={this.submitData}>Submit</button>
                 </form>  
            </div>
        )
    }
}
