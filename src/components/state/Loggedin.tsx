import React from 'react'
import { useState } from 'react'


const Loggedin = () => {

    const [isLoggedIn, setisLoggedIn] = useState(false)

    const handleLoggedIn=()=>{}
    const handleLoggedOut=()=>{}
  return (
    <>
       <button onClick={handleLoggedIn}>Log In</button>
       <button onClick={handleLoggedOut}>Log Out</button>
       <div> User is {isLoggedIn?'Logged in': 'Logged out'}</div>
    </>
  )
}

export default Loggedin