import React, { PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "taher"
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "taher"
            })
        }, 2000)
    }
  render() {
      console.log("*****************parent Comp***************************")
    return (
        <>
            <div>ParentComp</div>
            <PureComp name={this.state.name} />
            <RegComp name={this.state.name} />
      </>
    )
  }
}

export default ParentComp