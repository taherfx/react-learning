import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentF extends Component {
  render() {
    return (
    <UserConsumer>
      {
          (username) => {
              return <h2>Hello {username}</h2>
          }
      }
    </UserConsumer>
    )
  }
}

export default ComponentF