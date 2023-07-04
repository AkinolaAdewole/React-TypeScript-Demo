import React,{useRef,useEffect} from 'react'

// In React TypeScript, the useEffect hook is used to perform side effects in functional components. 
// Side effects can include fetching data, subscribing to events, 
// manipulating the DOM, or any other operation that affects the outside world.

const DomRef = () => {
    const inputRef=useRef(null)

    useEffect(() => {
      inputRef.current.focus()
    }, [])
    
  return (
    <div>
        <input type="text" ref={inputRef} />
    </div>
  )
}

export default DomRef