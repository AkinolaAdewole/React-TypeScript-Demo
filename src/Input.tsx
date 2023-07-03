import React from 'react'

type inputProp={
    value:string
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=> void
}
const Input = (props:inputProp) => {
     // You can use handleChange as a function
     const handleInputChange =(e:React.ChangeEvent<HTMLInputElement>)=>{}
  return (
   
    <div>
        <input type="text" value={props.value} onChange={props.handleChange} />
    </div>
  )
}

export default Input