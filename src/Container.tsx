import React from 'react'

type containerProps={
    styles:React.CSSProperties
}
const Container = (props:containerProps) => {
  return (
    // pass Style as props
    <div style={props.styles}>Container</div>
  )
}

export default Container