import React from 'react'

type greetProps={
    name:string;
    messageCount:number;
    isLoggedIn:boolean
}
const Greet = (props:greetProps) => {
  return (
    <div>
        <h3>Welcome {props.name}! You have {props.messageCount} messages </h3>

        {/* boolean type */}
    <h2> {props.isLoggedIn ? 
       `Welcome {props.name}! You have {props.messageCount} messages ` :`welcome Guest` } </h2> 
    {/* <h2> Welcome Akinola! You have 10 messages </h2>  */}
    </div>
  )
}

export default Greet;