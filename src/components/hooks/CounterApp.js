import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case "increment":
            return state + 1
        case "decrement":
            if (state <= 0){
                // alert("you can't decrease value after 0")
                return 0
            }
            else{
                return state - 1
            }
        case "reset":
            return initialState
        default:
            return state 
    }
        
}
function CounterApp() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h2>Count - {count}</h2>
        <button style={{margin: "10px", padding:"5px", color: "green"}} onClick={() => dispatch("increment")}>Increment</button>
        <button style={{margin: "10px", padding:"5px", color: "red"}} onClick={() => dispatch("decrement")}>Decrement</button>
        <button style={{margin: "10px", padding:"5px", color: "gray"}} onClick={() => dispatch("reset")}>Reset</button>
    </div>
  )
}

export default CounterApp