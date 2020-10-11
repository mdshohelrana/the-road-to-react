import React, { Component } from 'react'


class ClassCounterOne extends Component {

    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    componentDidMount(){
        document.title = `Click ${this.state.count} times`;
    }

    componentDidUpdate(){
        document.title = `Clicked ${this.state.count} times`;
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({count: this.state.count+1})}>
                    This button clicked {this.state.count} times </button>
            </div>
        )
    }
}

export default ClassCounterOne;


// Life cycle method handle on useEffect

// 1. componentDidMount
// 2. componentDidUpdate
// 3. componentWillUnmount