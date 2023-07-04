import { type } from 'os'
import React from 'react'


// In React TypeScript, string literals can be used to define specific values or types by creating a union type with literal values. 
// This is useful when you want to restrict a variable or prop to accept only a specific set of string values.
//  Here's an example of using string literals in React 

// Using string literals with union types in React TypeScript helps enforce type safety and prevents unintended values from being passed to components.
//  It provides clear and specific options for the acceptable values of certain variables or props.


type statusProps={
    status:'Loading'| 'Success' | 'Error'
}
const Status = (props:statusProps) => {
    let message;
    if(props.status==='Loading'){
        message='Loading...'
    } else if(props.status==='Success'){
        message='Data fetched successfully'
    } else if(props.status==='Error'){
        message='Error fetching data'
    }
    
  return (
    <div>
        <h2> Status - {message}</h2>
    </div>
  )
}

export default Status