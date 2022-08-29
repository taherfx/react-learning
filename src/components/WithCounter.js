import React from 'react'

const WithCounter = OriginComponent => {
    class newComponent extends React.Component
    {
        constructor(props) {
            super(props)
            
            this.state = {
                count: 0
            }
        }
    
        handleCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + 1}
            })
        }

        render(){
            return (
                <OriginComponent 
                    count={this.state.count} 
                    countHandler={this.handleCount}
                    {...this.props}
                /> 
            )
        }
    } 
   return newComponent
}

export default WithCounter