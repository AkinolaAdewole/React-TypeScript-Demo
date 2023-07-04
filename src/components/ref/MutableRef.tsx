// In React TypeScript, the useEffect hook is used to perform side effects in functional components. 
// Side effects can include fetching data, subscribing to events,
// manipulating the DOM, or any other operation that affects the outside world.


// Mutable Refs:
// Mutable refs, created using the useRef() hook, are more general-purpose and can be used to store any mutable value or reference. 
// Mutable refs are not limited to DOM elements and can hold any JavaScript value, including objects, arrays, or other mutable values. 
// They persist across component renders and can be updated without causing a re-render of the component.


import React,{useState,useRef, useEffect} from 'react'

const MutableRef = () => {
    const [timer, setTimer]=useState(0)
    const intervalRef=useRef<number | undefined>(undefined)

    const stopTimer=()=>{
        window.clearInterval(intervalRef.current);
    }

    useEffect(()=>{
        intervalRef.current= window.setInterval(()=>{
            setTimer((timer)=>timer+1)
        },1000)
       
        return ()=>{
            stopTimer()
        }
    },[])

  return (
    <>
      Hook Timer - {timer}
      <button onClick={()=>stopTimer()}>Stop Timer</button>
    </>
  )
}

export default MutableRef