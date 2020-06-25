import React, { Component } from 'react';

class AttrAndProps extends Component {
    render() {
        return (
            <div>
                <h5 className='my-3'>
                    Hello ! {this.props.attr}
                </h5>
            </div>
        );
    }
}

export default AttrAndProps;
