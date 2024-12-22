import React from 'react'
import Roadmap from '../roadMap/RoadMap'
import Timer from '../timer/Timer'

export default function Infography() {
  return (
    // <div className='flex border border-violet-500' >
  <div className='bg-[url("../../img/infography/Untitled.svg")] bg-no-repeat bg-cover flex max-lg:flex-col-reverse  lg:justify-around items-center overflow-hidden lg:relative z-20'>
     <Timer></Timer>
    <Roadmap></Roadmap>
   </div>
  )
}
