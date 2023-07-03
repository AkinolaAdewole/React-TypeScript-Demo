import React from 'react'


type oscarProps={
    children:React.ReactNode
}
const Oscar = (props:oscarProps) => {
  return (
    <div> <h2>{props.children}</h2></div>
  )
}

export default Oscar