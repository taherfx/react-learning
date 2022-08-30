import React, { useEffect, useReducer } from 'react'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type){
        case "FETCH_SUCCESS":
            return {
                loading: false,
                error: "",
                post: action.payload
            }
        case "FETCH_ERROR":
            return {
                loading: false,
                error: "Something went wrong",
                post: {}
            }
        default:
            return state
    }
}
function ComponentReduceGet() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/8')
        .then((response) => response.json())        
        .then((json) => dispatch({type: "FETCH_SUCCESS", payload: json}))
        .catch((error) => dispatch({type: "FETCH_ERROR"}));
    }, [])
  return (
    <div>
        {state.loading ? "Loading.." : state.post.title}
        {state.error ? state.error: null}
    </div>
  )
}

export default ComponentReduceGet