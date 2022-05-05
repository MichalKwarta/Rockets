import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
function LaunchItem(props: { children: ReactNode, id:number }) {
  return (
    <li key={ props.id.toString()} className='LaunchItem'><span>
      <Link to={`/${props.id}`}>🛰 {props.children}</Link>
      
      </span></li>
  )
}

export default LaunchItem