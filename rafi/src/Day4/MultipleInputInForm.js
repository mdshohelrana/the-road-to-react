import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class MultipleInputInForm extends Component {

    constructor() {
        super();
        this.state={
            fname: '',
            lname: '',
            email: ''
        }
    }

    onSubmitButtonClick = (event) => {
        let getName = event.target.name
        let val = event.target.value;

        this.setState({
            [getName]: val
        })
    }

    onSave = () =>{
        alert("FullName: " + this.state.fname + " " + this.state.lname + "\n" + 'Email: ' + this.state.email)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <input name='fname' onChange={this.onSubmitButtonClick}
                               className='border border-primary p-1 pl-2 rounded mt-2' id="exampleInputEmail1"
                               placeholder="First Name"/><br/>

                        <input name='lname' onChange={this.onSubmitButtonClick}
                               className='border border-primary p-1 pl-2 rounded m-2' id="exampleInputEmail1"
                               placeholder="Last Name"/><br/>

                        <input name='email' onChange={this.onSubmitButtonClick}
                               className='border border-primary p-1 pl-2 rounded' id="exampleInputEmail1"
                               placeholder="Email"/>
                        <br/>
                        <br/>
                        <input className='btn-outline-primary btn btn-sm' type='submit' value='Submit'/>
                    </div>
                </form>
            </div>
        );
    }
}

export default MultipleInputInForm;
