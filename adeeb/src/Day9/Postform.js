import React, { Component } from 'react'
import axios from 'axios'
import './Postform.css'


class Postform extends Component{
    constructor(props){
        super(props)

        this.state = {
            userId : '',
            title : '',
            body : ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response =>{
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }

    render(){
        const {userId, title, body} = this.state
        return(
            <div>
                <p> POSTing data to the server</p>
                <form onSubmit={this.submitHandler}>
                    <div>
                        
                        <span>UserId </span>
                        <input 
                        type="text" 
                        name = "userId" 
                        value = {userId}
                        onChange = {this.changeHandler}
                        /> 
                    </div>
                    <div>
                        <span>Title   </span>
                        <input type="text" 
                        name = "title"  
                        value = {title}
                        onChange = {this.changeHandler}
                        /> 
                    </div>
                    <div>
                        <span>Detail  </span>
                        <input type="text" name = "body" value={body}
                        onChange = {this.changeHandler}
                        /> 
                    </div>
                    <button type='submit' onClick={this.submitHandler}> Submit </button>    
                    
                </form>
                
            </div>
        )
    }
}

export default Postform;