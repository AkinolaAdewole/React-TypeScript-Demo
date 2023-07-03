import React from 'react'

type greetProps={
    name:string;
    messageCount:number;
    isLoggedIn:boolean
}
const Greet = (props:greetProps) => {
  return (
    <div>
    <h2> Welcome {props.name}! You have {props.messageCount} messages </h2> 
    {/* <h2> Welcome Akinola! You have 10 messages </h2>  */}
    </div>
  )
}

export default Greet;