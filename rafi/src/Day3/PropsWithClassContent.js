import React, { Component } from 'react';

class PropsWithClassContent extends Component {
    render() {
        return (
            <div>
                <h6>
                    Hello Props. {this.props.msg}
                </h6>
            </div>
        );
    }
}

export default PropsWithClassContent;
