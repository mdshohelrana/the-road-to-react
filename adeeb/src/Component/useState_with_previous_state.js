
import React ,{useState} from 'react'

function Previous_state(){
    const initail = 0;
    const [count , setCount] = useState(initail);
    

    const IncreamentFive = () =>{
        for (let i=0; i<5; i++){
            setCount(prevCount => prevCount + 1)
        }
        return count;
    }



     return(
        <div>
            Count: {count}
            <button onClick={()=>setCount(initail)}> Reset </button>
            <button onClick={()=>setCount(count+1)}> Increament </button>
            <button onClick={()=>setCount(count-1)}> Decreament </button>
            <button onClick={IncreamentFive}>Increament 5 </button>
        </div>
     )
}

export default Previous_state;