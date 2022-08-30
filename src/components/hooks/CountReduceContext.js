import React, { useReducer } from 'react'
import ComponentCA from './subCounter/ComponentCA'
import ComponentCB from './subCounter/ComponentCD'
import ComponentCC from './subCounter/ComponentCC'

export const countContext = React.createContext()

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

function CountReduceContext() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
      <countContext.Provider
        value={{countState: count, countDispatch: dispatch}}
      >
        <div>
            <h2>Count - {count}</h2>
            <ComponentCA />
            <ComponentCB />
            <ComponentCC />
        </div>
    </countContext.Provider>
  )
}

export default CountReduceContext