import React, {useState} from 'react'

function HookCounter(){

    const [count , setCount] = useState(0)

    return(
        <div>
        <button onClick = {()=>setCount(count + 1)}> Count {count} </button>   
        </div>
    )

}

export default HookCounter;


/*
1.  Make a button for making function activity start.
2.  A state component to intialization of variable.
3.  Write a function to change the initial variable value.


useState takes intial value
[count , setCount] = [variable , method(to change variable value)]

Two Rules of Hooks

1.  Only Call Hooks at Top level
Don't call inside loops, conditions or nested functions.


2.   Only call hooks from react Functions

*/