import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "test"
      }
      console.log("LifecycelA Constructor");
    }

    static getDerivedStateFromProps(state, props){
      console.log("LifecycelA getDriveStateFromProps");   
      return null      
    }

    componentDidMount(){
      console.log("LifecycelA componentDidMount");                
    }

    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate()")
        return true;
    }

    getSnapshotBeforeUpdate(prevprops, prevstate){
        console.log("LifecycleA getSnapshotBeforeUpdate()")
        return null
    }

    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate()")    
    }

    handleClickUpdate = () => {
        this.setState({
            name: "Taher here"
        })
    }
  render() {
    console.log("LifecycelA render")
    return (
        <div>
            LifecycleA {this.state.name}
            <br />
            <button onClick={this.handleClickUpdate}>Call update lifecycle</button>
            <br />
            <LifecycleB />
        </div>        
    )
    
  }
}

export default LifecycleA