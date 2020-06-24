import React, { Component } from 'react';

let componentForNesting = () => ({
    render: function () {
        return(
            <div>
                <h3>Hello ! i am from nesting component</h3>
            </div>
        )
    }
})


class NestedComponent extends Component {
    render() {
        return (
            <div>
                <h3>Nested Component</h3>
                <componentForNesting/>
            </div>
        );
    }
}

export default NestedComponent;
