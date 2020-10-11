import React,{useState} from 'react'

function UseState_array() {
    const [items, setItems] = useState([])
    const addItem = () =>{
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random()*10)+1
        }])
    }

    return (
        <div>
            <ul>
            {items.map(item=>(
                    <li key = {item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default UseState_array
