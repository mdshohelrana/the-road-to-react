import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DefaultProps extends Component {
    render() {
        return (
            <div>
                Hello ! {this.props.msg}
            </div>
        );
    }
}

DefaultProps.propTypes = {
    msg: PropTypes.string
}

DefaultProps.defaultProps = {
    msg: 'Default Props'
}

export default DefaultProps;
