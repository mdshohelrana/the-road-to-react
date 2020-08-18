import React from 'react'

function FunctionalComponent(props){
    return(
        <div>
            <p> This is calling from {props.attr} </p>
        </div>
    )
}

export default  FunctionalComponent;

// Note
// Functional Component don't need this key word
// But 'props' must be mention on the parenthesis