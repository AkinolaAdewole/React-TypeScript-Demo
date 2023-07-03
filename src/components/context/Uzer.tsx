import React from 'react'
import { useContext } from 'react'
import { userContext } from './Uzercontext'


// In React TypeScript, when using useContext to access values from a context provider, 
// it's important to consider the possibility of future updates to the context values. 
// TypeScript provides mechanisms to handle future values in a type-safe manner.

const Uzer = () => {

    const userKontext=useContext(userContext)

    const handleLogin=()=>{
        if (userKontext){
            userKontext.setUser({
                name:'Dell',
                email:'dell@example.com'
            })
        }
    }

    const handleLogout=()=>{
        if(userKontext){
            userKontext.setUser(null)
        }
    }
  return (
    <>
        <button onClick={handleLogin}>Log In</button>
        <button onClick={handleLogout}>Log Out</button>
        <div> username is {userKontext.user?.name}</div>
        <div> email is {userKontext.user?.email}</div>
    </>
  )
}

export default Uzer