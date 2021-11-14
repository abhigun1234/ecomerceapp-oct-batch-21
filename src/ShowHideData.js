import React, { Component } from 'react'

export default class ShowHideData extends Component {

    constructor() {
        super()
        this.state = { subject: true }

    }
    render() {
         //4 && short circut operator
         // ? : terniry operator
         return this.state.subject && <div>Angular</div>
        //3
    //   return(this.state.subject ?<div>Angular</div>:<div>React</div>) 


        //2
        // let subject;

        // if (this.state.subject) {
        //     subject = <div>Learn Angular</div>
        // }
        // else {
        //     subject = <div>Learn React</div>

        // }
        // return subject

        // 
        //1  // if(this.state.subject){
        //     return <div>Learn Angular</div>
        // }
        // else {
        //     return<div>Learn React</div>
        // }
        // return (
        //     <div>
        //         <div>
        //             Learn Angular
        //         </div>
        //         <div>
        //             Learn React
        //         </div>
        //     </div>
        // )
    }
}
