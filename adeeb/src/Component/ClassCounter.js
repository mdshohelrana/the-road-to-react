import React, {Component} from 'react';

class ClassCounter extends Component{
    constructor(props){
        super (props)
        this.state = {
            count : 0,
            square : 2
        }
    }

    incrementCount = () =>{
        this.setState ({
            count : this.state.count + 1
        })
    }

    squareIncreament = () =>{
        this.setState({
            square : this.state.square * this.state.square 
        })
    }
    render(){
        return(
            <div>
                <button onClick = {this.incrementCount}>Count {this.state.count}</button>
                <button onClick = {this.squareIncreament}> Square {this.state.square}</button>
                </div>
        )
    }
}

export default ClassCounter;