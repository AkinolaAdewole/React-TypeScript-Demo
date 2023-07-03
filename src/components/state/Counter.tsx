import React from 'react'
import { useReducer } from 'react'


// In React TypeScript, you can use the useReducer hook to manage state in a more complex manner, 
// typically when you have multiple actions or need to handle more advanced state updates. 
// The useReducer hook takes a reducer function and 
// an initial state as arguments and returns the current state and a dispatch function to update the state.



// State is number while Action is a type
type counterState={
    count:number
}

// type counterAction={
//     type:'increment' | 'decrement' | 'reset'
//     payload:number
// }



// Discriminated unions also known as tagged unions or algebraic data types are a powerful 
// feature in TypeScript that allows you to create a type that represents a value that can be one of several specific options. 
// Discriminated unions make use of a common property, often called a "discriminant" or "tag" to determine which 
// option of the union is currently being used.

type updateAction={
    type:'increment' | 'decrement'
    payload:number
}
 type resetAction={
    type:'reset'
 }

 type counterAction= updateAction | resetAction 


const initialState={count:0};
const reducer=(state:counterState, action:counterAction)=>{
    switch (action.type){
        case 'increment':
            return {count:state.count + action.payload}
        case 'decrement':
            return {count:state.count - action.payload}    
            
         case 'reset':
         return initialState   
        default :
          return state;
    }
}


const Counter = () => {
    const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <>
          Count:{state.count}
          <button onClick={()=>dispatch({type:'increment', payload:10})}> Increment 10</button>
          <button onClick={()=>dispatch({type:'decrement', payload:10})}>Decrement 10</button>
          <button onClick={()=>dispatch({type:'reset', payload:10})}>Decrement 10</button>
    </>
  )
}

export default Counter