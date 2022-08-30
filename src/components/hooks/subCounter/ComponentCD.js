import React, { useContext } from 'react'
import { countContext } from '../CountReduceContext'

function ComponentCD() {
    const count = useContext(countContext)
  return (
    <div>
        <label style={{display: "block"}}>Component D</label>
        <button style={{margin: "10px", padding: "10px"}} onClick={() => count.countDispatch("increment")}>Increment</button>
        <button style={{margin: "10px", padding: "10px"}} onClick={() => count.countDispatch("decrement")}>Decrement</button>
        <button style={{margin: "10px", padding: "10px"}} onClick={() => count.countDispatch("reset")}>Reset</button>
    </div>
  )
}

export default ComponentCD