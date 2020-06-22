import React, { Component } from 'react';
import NestedComponent from "./NestedComponent";

class BaseComponent extends Component {
    render() {
        return (
            <div className='border border-primary text-info'>
                <NestedComponent/>
            </div>
        );
    }
}

export default BaseComponent;
