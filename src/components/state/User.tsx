import React from 'react'
import { useState } from 'react'

type AuthUser={
    name:string
    email:string
}

// Type inference in React TypeScript refers to the ability of the TypeScript compiler to 
// automatically deduce and assign types to variables and expressions without explicitly specifying them.
// In React TypeScript projects, type inference plays a significant role in 
// providing type safety and reducing the need for explicit type annotations. 



// In React TypeScript, when using the useState hook to manage state in a functional component,
//  you can use type assertions to explicitly define the type of the state variable. 
// Type assertions allow you to override the inferred type and ensure that the state variable has the correct type.

const User = () => {
    const [user, setUser] =  useState <AuthUser | null>(null)

    const handleLoggedIn=()=>{
        setUser({
           name:'Ade',
           email:'ade@example.com'
        })
    }


    const handleLoggedOut=()=>{
        setUser(null);
    }

  return (
  
    <div>
          <button onClick={handleLoggedIn}>Log In</button>
        <button onClick={handleLoggedOut}>Log Out</button>
          <div> User is {user?.name}</div>
          <div>email is {user?.email}</div>
    </div>
  )
}

export default User