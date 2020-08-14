import React, {Component} from 'react'

class Conditional_randering extends Component{

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn : true
        }
    }

    render(){
        // If-else condiotional is applied on the statement.
        // let output_info;

        // if(this.state.isLoggedIn){
        //     output_info =  'Is logged in';
        // }
        // else{
        //         output_info =  'Welcome guest';
        // }
        return(
            // <div>
            //     <h1> {output_info} </h1>
            // </div>

            // Ternary Operation is applied on the Statement
            this.state.isLoggedIn ? <div> You are logged in </div> : <div> you are not logged in </div>
        )
    }
}

export default Conditional_randering