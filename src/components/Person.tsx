import React from 'react'

type personProps={
    name:{
        firstname:string
        lastname:string;
    }
}
const Person = (props:personProps) => {
  return (
    <>
    {props.name.firstname} {props.name.lastname}
    </>
  )
}

export default Person