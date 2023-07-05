import React from 'react'


// In React TypeScript, you can create a polymorphic component by using generics. 
// Generics allow you to define a component that can accept different types as props, enabling you to create reusable and flexible components.

type TextProps={
    size?:'sm' | 'md' | 'lg'
    color?: "primary" | 'secondary'
    children:React.ReactNode
    as?:string
}
const Text = ({size, color, as, children}:TextProps) => {

  return (
    <div className={`class-with ${size}-${color}`}>{children}</div>
  )
}

export default Text