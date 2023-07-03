import React from 'react'

type personListProps={
    names:{
        firstname:string,
        lastname:string
    }[]
}
const PersonList = (props:personListProps) => {
  return (
    <>
    {props.names.map((name,index)=>{
       return (
        <h2 key={index}>{name.firstname} {name.lastname}</h2>
       )
    })}
    </>
  )
}

export default PersonList