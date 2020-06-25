import React, {Component} from 'react';

class MyForm extends Component {
    constructor() {
        super();

        this.state = {
            userName: ''
        }
    }

    onSubmitButtonClick = (event) => {
        let userName = event.target.name;
        let name = event.target.value;

        this.setState({
            [userName]: name
        })
    }

    onSubmitEventHandler = (event) =>{
        alert(this.state.userName)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitEventHandler}>
                    <div className="form-group">
                        <label className='lead'>Email address</label>&nbsp;
                        <input name='userName' onChange={this.onSubmitButtonClick} className='border border-primary p-1 pl-2 rounded' id="exampleInputEmail1"
                               placeholder="Enter email"/>
                        <br/>
                        <input className='btn-outline-primary btn mt-3 btn-sm' type='submit' value='Submit'/>
                        <br/>
                        <br/>
                        <label className='lead'>Name : {this.state.userName}</label><br/>

                    </div>
                </form>
            </div>
        );
    }
}

export default MyForm;
