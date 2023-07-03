import React,{useContext} from 'react'
import { ThemeContext } from './ThemeContext'

// In React TypeScript, you can use the useContext hook to access the value of a context object within a functional component. 
// The useContext hook allows you to retrieve the current value of a context and subscribe to updates to that context.

const Box = () => {
    const theme =useContext(ThemeContext);
  return (
    <div style={{backgroundColor:theme.primary.main, color:theme.primary.text}}>
        In React TypeScript, you can use the useContext hook to access the value of a context object within a functional component. <br /> 
        The useContext hook allows you to retrieve the current value of a context and subscribe to updates to that context.
    </div>
  )
}

export default Box