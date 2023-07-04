import React,{useRef,useEffect} from 'react'

// In React TypeScript, the useEffect hook is used to perform side effects in functional components. 
// Side effects can include fetching data, subscribing to events, 
// manipulating the DOM, or any other operation that affects the outside world.

// DOM Refs (Ref forwarding):
// DOM refs, also known as "ref forwarding," are primarily used to reference and interact with DOM elements directly. 
// They are created using the createRef() function or the useRef() hook. DOM refs allow you to access properties and methods of DOM elements, 
// such as inputRef.current.value or inputRef.current.focus(). 
// DOM refs are typically used when you need direct access to a specific DOM element or to integrate with third-party libraries that require DOM manipulation


const DomRef = () => {
  // since I am accessing input, I will use HTMLinputElement and add exclamation mark to null
    const inputRef=useRef<HTMLInputElement>(null!)

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