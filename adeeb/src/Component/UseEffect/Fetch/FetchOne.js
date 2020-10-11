import React, {useEffect, useState} from 'react'
import axios from 'axios'
function FetchOne() {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState()
    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    return (
        <div>
            {/* <input type='text' value ={id} onChange={e=>setId(e.target.value)} /> */}
            <ul>
                {posts.map(post =>(
                    <li key={post.id}>{post.title}</li>
                ) 
                )}
            </ul>
        </div>
    )
}

export default FetchOne

/*
Package install -- npm install axios

*/