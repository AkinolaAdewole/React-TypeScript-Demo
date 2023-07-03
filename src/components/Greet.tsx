import React from 'react'

type greetProps={
    name:string;
    // to make messageCount optional, I add question mark to it
    messageCount?:number;
    isLoggedIn:boolean
}
const Greet = (props:greetProps) => {
    // Optional props: I can destructured messageCount
    const {messageCount=0}=props
  return (
    <div>
        <h3>Welcome {props.name}! You have {props.messageCount} messages </h3>

        {/* boolean type */}
    <h2> {props.isLoggedIn ? 
       `Welcome {props.name}! You have {messageCount} messages ` :`welcome Guest` } </h2> 
    {/* <h2> Welcome Akinola! You have 10 messages </h2>  */}
    </div>
  )
}

export default Greet;