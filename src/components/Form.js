import React, { Component } from 'react'
import "./mystyle.module.css"

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comment: '',
         topic: ''
      }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }   

    handleSubmitEvent = (event) => {
        event.preventDefault();
        alert(this.state.username + " " + this.state.comment + " " + this.state.topic)
    }

  render() {
    return (
      <div>
          <div>
              <h2>User Form</h2>
          </div>
          <form onSubmit={this.handleSubmitEvent}>
              <div>
                  <label>Username</label>
                  <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
              </div>
              <div>
                  <label>Comments</label>
                  <textarea value={this.state.comment} onChange={this.handleCommentChange}></textarea>
              </div>
              <div>
                  <label>Select Topic</label>
                  <select value={this.state.topic} onChange={this.handleTopicChange}>
                      <option value="react">React</option>
                      <option value="angular">Angular</option>
                      <option value="vue">Vue</option>
                  </select>
              </div>
              <button type='submit'>Submit</button>
          </form>
      </div>
    )
  }
}

export default Form