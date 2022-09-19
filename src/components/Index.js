import React, { Component } from 'react'
import HomePage from './HomePage'
import LogInPage from './LogInPage'

export default class Index extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         LogInPage:false
         
      }
    }
    
  render() {
    let element;
    if(this.state.LogInPage)
    {
       element = <HomePage />
    }
    else{
        element = <LogInPage />
    }
    return (
      <div>
        {element}
      </div>
    )
  }
}
