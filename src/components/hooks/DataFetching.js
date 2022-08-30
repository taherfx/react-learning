import React, { useEffect, useState } from 'react'

function DataFetching() {
    const [posts, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(data => setPost(data))
        .catch(err => console.log(err));
    }, [])
    
  return (
    <div>
        {/* {JSON.stringify(posts)} */}
        <ul>
            {
                posts.map(item => {
                    return <li key={item.id}>{item.title}</li>
                })
            }
        </ul>
    </div>
  )
}

export default DataFetching