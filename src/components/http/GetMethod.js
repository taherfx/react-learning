import React, { Component } from 'react'

class GetMethod extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({posts: data})
        })
        .catch(err => console.log(err))        
    }
  render() {
      const { posts } = this.state
    return (
      <div>
          list of posts
          {
              posts.length ? 
              posts.map(data => {
                  return <div key={data.id}>{data.title}</div>
              }) : ""
          }
      </div>
    )
  }
}

export default GetMethod