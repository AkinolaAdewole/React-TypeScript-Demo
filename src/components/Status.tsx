import { type } from 'os'
import React from 'react'

type statusProps={
    status:string
}
const Status = (props:statusProps) => {
    let message;
    if(props.status==='Loading'){
        message='Loading...'
    } else if(props.status==='success'){
        message='Data fetched successfully'
    } else if(props.status==='error'){
        message='Error fetching data'
    }
    
  return (
    <div>
        <h2>Loading...</h2>
        <h2>Data fetched successfully</h2>
        <h2>Error fetching data</h2>
    </div>
  )
}

export default Status