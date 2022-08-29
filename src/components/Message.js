import React, { Component } from "react";

class Message extends Component
{
    constructor() {
        super(); //Since we are extending another class, it is mandatory
        //this.state is an object
        this.state = {
            msg: "Welcome Visitor"
        }
    }   
    changeMessage = () => {
        this.setState({
            msg: "Thanks for Subscribing"
        }
        )  
    }

    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.changeMessage}>Subscribe</button>
            </div>
        )
    }
}

export default Message 