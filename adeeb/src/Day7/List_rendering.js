import React, {Component} from 'react';
import Person from './Person';

// Comment


// Using Class Based Component on List Rendering .....

// class List_rendering extends Component{
//     render(){
//         const values= [1,3,4,5];
//         function square(val) {
//             return val * val;
//         }
//         return(
//             <div>
//                 {
//                     values.map(nam=><h2> {nam} </h2>)
//                 }
//             </div>
//         );
//     }
// }
// export default List_rendering


// Using Functional Conponent on List Rendering...

// function List_rendering(){
    
//     const values = [1,2,3,4,5];

//     return(
//         <div>
//             {
//                 values.map(value => <span>{value }</span>)
//             }
            
//         </div>
//     )
// }

// export default List_rendering



function List_rendering(){
    const persons = [
        {
            id : 1,
            name : 'kamal',
            age : 12
        },
        {
            id : 2,
            name : 'rahim',
            age : 15
        },
        {
            id : 3,
            name : 'salim',
            age : 23
        }
    ]

    const info_all = persons.map(person => <Person key ={person.id}  person = {person} /> )

    return(
        <div>{info_all}</div>
    )
}
export default List_rendering