import react, { Component } from 'react'

class Welcome extends Component
{
    render(){
        return (
            <div>
                <h1>
                    Welcome {this.props.name} To React App
                </h1>
            </div>
        )
    }
}

export default Welcome