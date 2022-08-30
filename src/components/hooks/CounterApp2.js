import React, { useReducer } from 'react'

const initialState = {
    firstCount: 0,
    secondCount: 10
}
const reducer = (state, action) => {
    switch(action.type){
        case "increment":
            return {...state, firstCount: state.firstCount + action.value}
        case "decrement":
            if (state.firstCount <= 0){
                // alert("you can't decrease value after 0")
                return {...state, firstCount: 0}
            }
            else{
                return {...state, firstCount: state.firstCount - action.value}
            }
        case "reset":
            return {...state, firstCount: 0}

        case "increment2":
            return {...state, secondCount: state.secondCount + action.value}
        case "decrement2":
            if (state.secondCount <= 10){
                // alert("you can't decrease value after 0")
                return {...state, secondCount: 10}
            }
            else{
                return {...state, secondCount: state.secondCount - action.value}
            }
        case "reset2":
            return {...state, secondCount: 10}
        default:
            return initialState
    }
        
}
function CounterApp2() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h2>Count - {count.firstCount}</h2>
        <button style={{margin: "10px", padding:"5px", color: "green"}} onClick={() => dispatch({type: "increment", value: 1})}>
            Increment
        </button>
        <button style={{margin: "10px", padding:"5px", color: "red"}} onClick={() => dispatch({type: "decrement", value: 1})}>
            Decrement
        </button>
        <button style={{margin: "10px", padding:"5px", color: "green"}} onClick={() => dispatch({type: "increment", value: 5})}>
            Increment 5
        </button>
        <button style={{margin: "10px", padding:"5px", color: "red"}} onClick={() => dispatch({type: "decrement", value: 5})}>
            Decrement 5
        </button>
        <button style={{margin: "10px", padding:"5px", color: "gray"}} onClick={() => dispatch({type: "reset"})}>Reset</button>

        <h2>Second Count - {count.secondCount}</h2>
        <button style={{margin: "10px", padding:"5px", color: "green"}} onClick={() => dispatch({type: "increment2", value: 10})}>
            Increment
        </button>
        <button style={{margin: "10px", padding:"5px", color: "red"}} onClick={() => dispatch({type: "decrement2", value: 10})}>
            Decrement
        </button>
        <button style={{margin: "10px", padding:"5px", color: "gray"}} onClick={() => dispatch({type: "reset2"})}>Reset</button>
    </div>
  )
}

export default CounterApp2