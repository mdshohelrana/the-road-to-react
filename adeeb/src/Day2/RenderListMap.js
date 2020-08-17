import React from 'react'

function Square(props){
    return(
            props.attr * props.attr
    )
}

function RenderListMap(){

    const values = [1,2,3,4,5,9];

    return(
        <div>
            <h4> Square of input value</h4>
            <p> Rendering list with map list elemente are [1,2,3,4,5,9] </p>
            <p> Square value are given below</p>
            {
                values.map(value => <p key={value}><Square attr= {value} /></p>)
            }

        </div>
    )
}

export default RenderListMap