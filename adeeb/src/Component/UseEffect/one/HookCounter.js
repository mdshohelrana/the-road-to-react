import React, { useState, useEffect } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)
// We need to interacted HTML file too

    useEffect(() => {
        document.title = `You clicked ${count} times.`
     })


    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}> Add {count} times</button>
        </div>
    )
}

export default HookCounter;


// Life cycle method handle on useEffect

// 1. componentDidMount
// 2. componentDidUpdate
// 3. componentWillUnmount