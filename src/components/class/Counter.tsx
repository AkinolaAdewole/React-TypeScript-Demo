import React, { Component } from 'react'

// define the props and state type
type counterProp={
    message:string
}

type counterState={
    count:number
}

// connect the type with the class component
// If You don't have prop, put an empty object{} and if you have state, simply remove it 
export default class Counter extends Component <counterProp, counterState>{
    state={
        count:0,
    }

    handleClick=()=>{
        this.setState((prevState)=>({count:prevState.count+1}))
    }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    )
  }
}
