import React, { useEffect, useState } from 'react'

function UseEffectEx() {
    const [count, setCount] = useState(0)
    const [name, Setname] = useState('')
    useEffect(() => {
        console.log("useEffect - updating document value")
        document.title = `You click ${count} times`
    }, [count])
  return (
    <div>
        <input type="text" value={name} onChange={e => Setname(e.target.value)} />
        <button onClick={() => setCount(prevState => prevState + 1)}>Add {count}</button>
    </div>
  )
}

export default UseEffectEx