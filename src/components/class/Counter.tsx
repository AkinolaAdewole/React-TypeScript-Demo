import React, { Component } from 'react'

// define the props and state type
type counterProp={
    message:string
}

type counterState={
    state:number
}


export default class Counter extends Component {
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
