import React from 'react'

type ButtonProps={
    variant: 'Primary' | 'Secondary'
}

const CustomButton = ({variant}:ButtonProps) => {
  return (
    <div>
        <button className={`class-with-${variant}`}>Label</button>
    </div>
  )
}

export default CustomButton