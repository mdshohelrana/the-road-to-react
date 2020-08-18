import React from 'react'
import classes from './Person.css'

// function button_click(){
//     return(
//         <div>
//             <p>Button clicked</p>
//         </div>
//     )
// }

function Person({person}){
    return(
        <div>
            <p className={classes}>
            My name is {person.name} and {person.age} years old.
            </p>
            <h5>
                My Id id {person.id}
            </h5>
    {/* <button onClick={button_click}> Click Me</button> */}
        </div>
    )
}

export default Person