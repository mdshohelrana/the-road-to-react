// We will learn what is NestedElementJSX and Attribute pass
// In this program we use two type of component.
// NestedElementJSX is a Class based component
// Deep1, Deep2 , Deep3 are functional components

import React ,{Component} from 'react'

let Deep3 = (props) => {
    return (
        <div>
            <p>depth value = {props.val}</p>
        </div>
    )
}



const Deep2 =(props) => {
    return(
        <div>
        <p> depth value = {props.val}</p>
        <Deep3 val='3' />
        </div>
    )
}


let Deep1 = (props) =>{
        return(
            <div>
                <p> depth value = {props.val}</p>
                <Deep2 val ='2' />
            </div>
        )
    }

class NestedElementJSX extends Component{
    render() {
        return(
            <div>
                <h4> Calling 3 depth component with attribute pass as value</h4>
                <Deep1 val = '1'/>
            </div>
        )
    }
}

export default NestedElementJSX;

// Note :

// Nested Component
// NestedElementJSX calling Deep1
// Deep1 calling Deep2
// Deep2 calling Deep3

// <Deep1 val = '1'/> here val is attribute pass val with '1'
// <Deep2 val = '2'/> here val is attribute pass val with '2'


