import React from 'react'


// In React TypeScript, you can create a polymorphic component by using generics. 
// Generics allow you to define a component that can accept different types as props, enabling you to create reusable and flexible components.

type TextOwnProps<E extends React.ElementType>={
    size?:'sm' | 'md' | 'lg'
    color?: "primary" | 'secondary'
    children:React.ReactNode
    as?:E
}

type TextProps<E extends React.ElementType>=TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

const Text = <E extends React.ElementType='div'> ({size, color, as, children}:TextProps<E>) => {
    const Component= as || 'div'

  return (
    <Component className={`class-with ${size}-${color}`}>{children}</Component>
  )
}

export default Text