import React from 'react'

type ButtonProps={
    variant: 'Primary' | 'Secondary'
    children:string
} & Omit <React.ComponentProps<'button'>,'children'>

const CustomButton = ({variant, children, ...rest} :ButtonProps) => {
  return (
    <div>
        <button className={`class-with-${variant}`} {...rest}>{children}</button>
    </div>
  )
}

export default CustomButton