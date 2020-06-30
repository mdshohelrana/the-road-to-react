import React, { Component } from 'react';

class LifeCycleMountMethod extends Component {

    constructor() {
        super();
        console.log('constructor called')
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps called')
    }

    componentDidMount(){
        console.log('ComponentDidMount called')
    }

    render() {
        console.log('Render Called')
        return (
            <div>

            </div>
        );
    }
}

export default LifeCycleMountMethod;
