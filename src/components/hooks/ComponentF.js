import React, { Component } from 'react'
import { ChannelContext, UserContext } from '../../App'

class ComponentF extends Component {
    render() {      
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return(
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return (
                                            <div>
                                                User context value {user} && Channel context {channel}
                                            </div>
                                        )
                                    }
                                }
                            </ChannelContext.Consumer>
                        ) 
                    }
                }
            </UserContext.Consumer>
        </div>
    )
  }
}

export default ComponentF