import React, { Component } from 'react'

class ClickCounterTwo extends Component {
  render() {
      const {count, incrementCount} = this.props
    return (
        <button onClick={incrementCount}>Count {count} Clicked</button>
    )
  }
}

export default ClickCounterTwo