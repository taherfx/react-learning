import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class HoverCount extends Component {
    render() {
        const {count, countHandler} = this.props

        return (        
        <button onMouseEnter={countHandler}>Hover {count} times</button>
        )
    }
}

export default UpdatedComponent(HoverCount)