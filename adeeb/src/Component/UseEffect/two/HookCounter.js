import React, { useState, useEffect } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
// We need to interacted HTML file too

    useEffect(() => {
        console.log('update')
        document.title = `You clicked ${count} times.`
     }, [count])


    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={()=>{setCount(count+1)}}> Add {count} times</button>
        </div>
    )
}

export default HookCounter

/*
 useEffect(() => {
  }, [])
  
  [] - is used for condition apply
*/