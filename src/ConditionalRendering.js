import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
    constructor() {
        super()
        this.state = { isLoggedIn: true }
    }
    render() {
// 4 approch 
    return this.state.isLoggedIn && <div>Welcome Mean stack</div>
        // 3 approch
    // return(this.state.isLoggedIn ?<div>Welcome Mean Stack</div>:<div>Welcome Mern Stack</div>) 
        //2 approch
        // let msg
        // if(this.state.isLoggedIn){
        //     msg=
        //     <div>Welcome Mean Stack</div>
        // }
        // else{
        //     msg=
        //     <div>Welcome Mern Stack</div>
        // }
        // return <div>{msg}</div>

// 1 approch
        // if (this.state.isLoggedIn) {
        //     return (

        //         <div>Welcome Mean Stack</div>


        //     )
        // }
        // else {
        //     return (

        //         <div>Welcome Mern Stack</div>


        //     )
        // }
        // return (
        //     <div>
        //         <div>Welcome Mean Stack</div>
        //         <div>Welcome Mern Stack</div>
        //     </div>
        // )
    }
}
