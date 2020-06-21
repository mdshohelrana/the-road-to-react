import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class
const ReactHook = () => {

    let [count, setCount] = useState(0);

    function counterButtonHandler(){
       setCount(++count);
    }

    return (
        <div>
            <button onClick={counterButtonHandler} className='btn btn-sm btn-outline-primary mx-5'>Counter</button>
            <span className='h3 mx-5 text-primary'>{count}</span>
        </div>
    );
};

export default ReactHook;
