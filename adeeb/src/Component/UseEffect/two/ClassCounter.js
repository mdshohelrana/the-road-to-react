import React, { Component } from 'react'


class ClassCounterOne extends Component {

    constructor(props){
        super(props)
        this.state = {
            count : 0,
            name : ""
        }
    }

    componentDidMount(){
        document.title = `Click ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log("updateing value")
            document.title = `Clicked ${this.state.count} times`
        }
        
    }
    render() {
        return (
            <div>
                <input 
                type="text" 
                value={this.state.name} 
                onChange = {e=>{
                    this.setState({name: e.target.value })
                }}
                />
                <button onClick={() => this.setState({count: this.state.count+1})}>
                    This button clicked {this.state.count} times </button>
            </div>
        )
    }
}

export default ClassCounterOne;


// componentDidUpdate(prevProps, prevState)
/*
prevState.count !== this.state.count
when the button is presssed then 'prevState.count !== this.state.count' condition 
become successful.
*/