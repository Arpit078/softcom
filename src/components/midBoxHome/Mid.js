import React from 'react'
import "./Mid.css"
import NavMid from './NavMid'
import Post from './Post'
function Mid() {
  return (
    <div className='containerMid'>
        <div className="navwrap"><NavMid/></div>
        <div className="postwrap"><Post/><Post/></div>
    </div>
  )
}

export default Mid