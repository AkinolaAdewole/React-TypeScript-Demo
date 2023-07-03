import React from 'react'


// In React TypeScript, when using useContext to access values from a context provider, 
// it's important to consider the possibility of future updates to the context values. 
// TypeScript provides mechanisms to handle future values in a type-safe manner.

const Uzer = () => {
    const handleLogin=()=>{}
    const handleLogout=()=>{}
  return (
    <>
        <button onClick={handleLogin}>Log In</button>
        <button onClick={handleLogout}>Log Out</button>
    </>
  )
}

export default Uzer