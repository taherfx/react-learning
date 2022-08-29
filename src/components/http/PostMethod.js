import React, { Component } from 'react'

class PostMethod extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         title : "",
         body : "",
         userId: ""
      }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body,
                userId: this.state.userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
    render() {        
    return (
      <form onSubmit={this.handleSubmit}>
          <h1>User Form</h1>
          <div>
              <input type="text" placeholder='User ID' value={this.state.userId} onChange={e => this.setState({userId: e.target.value})} />
          </div>
          <div>
              <input type="text" placeholder='Title' value={this.state.title} onChange={e => this.setState({title: e.target.value})} />
          </div>
          <div>              
              <textarea value={this.state.body} placeholder="type here..." onChange={e => this.setState({body: e.target.value})}></textarea>
          </div>
          {/* <div>
              <select value={type} onChange={e => setType(e.target.value)}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
              </select>
          </div> */}
          <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default PostMethod