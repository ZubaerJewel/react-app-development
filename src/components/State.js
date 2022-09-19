import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 4
      }
    }
    
  render() {
    let { count } = this.state
    return (
      <div>
        <h1>Count: {count}</h1> 
        <button onClick={() => this.setState({ count: count + 1 })}
        disabled={count === 10? true:false} >++++</button>
        <button onClick={() => this.setState({ count: count - 1 })}
         disabled={count === 0? true:false} >----</button>
      </div>
    )
  }
}
