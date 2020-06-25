import React, { Component } from 'react';

class FormSingleElement extends Component {
    constructor() {
        super();

        this.state = {
            name: ''
        }
    }

    onSubmitButtonClick = (event) => {
        let userName = event.target.value;
        this.setState({
            name: userName
        })
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label className='lead'>Email address &nbsp;</label>
                        <input onChange={this.onSubmitButtonClick} className='border border-primary p-1 pl-2 rounded' id="exampleInputEmail1"
                               placeholder="Enter email"/>
                        <br/>
                        <label className='lead'>Name : {this.state.name}</label><br/>

                    </div>
                </form>
            </div>
        );
    }
}

export default FormSingleElement;
