import React from 'react'

type InputProps=React.ComponentProps<'input'>

const CustomInput = (Props:InputProps) => {

  return (
    <div>
        <input type="text" {...Props} />
    </div>
  )
}

export default CustomInput