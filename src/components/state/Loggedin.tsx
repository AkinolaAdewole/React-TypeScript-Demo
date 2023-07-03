import React from 'react'
import { useState } from 'react'


const Loggedin = () => {

    const [isLoggedIn, setisLoggedIn] = useState(false)

    const handleLoggedIn=()=>{
        setisLoggedIn(true);
    }
    const handleLoggedOut=()=>{
        setisLoggedIn(false);
    }
  return (
    <>
       <button onClick={handleLoggedIn}>Log In</button>
       <button onClick={handleLoggedOut}>Log Out</button>
       <div> User is {isLoggedIn?'Logged in': 'Logged out'}</div>
    </>
  )
}

export default Loggedin