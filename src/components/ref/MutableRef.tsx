// In React TypeScript, the useEffect hook is used to perform side effects in functional components. 
// Side effects can include fetching data, subscribing to events,
// manipulating the DOM, or any other operation that affects the outside world.


import React,{useState,useRef, useEffect} from 'react'

const MutableRef = () => {
    const [timer, setTimer]=useState(null)
    const intervalRef=useRef(null)

  return (
    <div>MutableRef</div>
  )
}

export default MutableRef