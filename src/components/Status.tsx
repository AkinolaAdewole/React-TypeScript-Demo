import { type } from 'os'
import React from 'react'

type statusProps={
    status:'Loading'| 'Success' | 'Error'
}
const Status = (props:statusProps) => {
    let message;
    if(props.status==='Loading'){
        message='Loading...'
    } else if(props.status==='Success'){
        message='Data fetched successfully'
    } else if(props.status==='Error'){
        message='Error fetching data'
    }
    
  return (
    <div>
        <h2> Status - {message}</h2>
    </div>
  )
}

export default Status