import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "test"
      }
      console.log("LifecycelB Constructor");
    }

    static getDerivedStateFromProps(state, props){
      console.log("LifecycelB getDriveStateFromProps");   
      return null      
    }

    componentDidMount(){
      console.log("LifecycelB componentDidMount");                
    }

    shouldComponentUpdate(){
        console.log("LifecycleB shouldComponentUpdate()")
        return true;
    }

    getSnapshotBeforeUpdate(prevprops, prevstate){
        console.log("LifecycleB getSnapshotBeforeUpdate()")
        return null
    }

    componentDidUpdate(){
        console.log("LifecycleB componentDidUpdate()")    
    }

  render() {
    console.log("LifecycelB render")
    return <div>LifecycleB</div>
  }
}

export default LifecycleB