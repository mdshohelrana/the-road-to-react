import React, { Component } from 'react';

class UseOfMap extends Component {

    country = ['Bangladesh', 'Nepal', "Canada"]
    countryList = this.country.map((items) => <li>{items}</li>)

    render() {
        return (
            <div>
                <ol>
                    {this.countryList}
                </ol>
            </div>
        );
    }
}

export default UseOfMap;
