import React, { Component } from "react";

class State extends Component{
    constructor() {
        super()
        this.state = {
            value : 0
        }
    }

    changevalue(){
        this.setState(
            {
           value : this.state.value + 1
            }
        )
    }

    render(){
        return(
            <div>
                <h4> Using State compnent to dynamical change the value</h4>
                <p>Button Clicked : {this.state.value} times</p>
                <button onClick={() => this.changevalue()}> start </button>
            </div>
        )
    }
}

export default State