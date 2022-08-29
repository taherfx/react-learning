import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class ClickCounter extends Component {
    
    render() {
        const {count, countHandler} = this.props
    return (        
      <button onClick={countHandler}>{this.props.name} Count {count} times</button>
    )
  }
}

export default UpdatedComponent(ClickCounter)