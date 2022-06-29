import React from 'react'
import "./Left.css"
import NavLeft from "./NavLeft"
import Box1 from './Box1';
import Box2 from "./Box2"
function Left() {
  return (
    <div className='containerLeft'>
        <NavLeft/>
        <Box1/>
        <Box2/>


    </div>
  )
}

export default Left