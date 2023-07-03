import React from 'react'
// click Event as a prop

type buttonProps={
    handleClick:(e:React.MouseEvent<HTMLButtonElement>, id:number)=> void
}

// type buttonProps={
//     handleClick:()=> void
// }

const Button = (props:buttonProps) => {
  return (
    <div> 
        {/* <button onClick={props.handleClick}>Click</button> */}
        
        <button onClick={(e)=>props.handleClick(e,1)}>Button</button>
    </div>
  )
}

export default Button