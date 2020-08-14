import React from 'react'

function IndexAsKey(){
    const names = ['karim', 'abir', 'rakin', 'selim']
    const name_list = names.map((name, index) => <h2 key = {index}> {name} </h2>)
    return(
        <div>
            {name_list}
        </div>
    )
}

export default IndexAsKey