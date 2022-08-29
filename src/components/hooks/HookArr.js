import React, { useState } from 'react'

function HookArr() {
    const [items, setItems] = useState([])
    
    const handleItem = () =>{
        setItems([ ...items, {
            id: items.length,
            value: Math.ceil(Math.random() * 10) + 1
        }])
    }

    return (
    <div>
        <button onClick={handleItem}>Add a item</button>
        <ul>
            {
                items.map(item => (<li key={item.id}>{item.value}</li>))
            }
        </ul>
        <p>{JSON.stringify(items)}</p>
    </div>
  )
}

export default HookArr