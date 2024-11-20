import React from 'react'
import Roadmap from '../roadMap/RoadMap'
import Timer from '../timer/Timer'

export default function Infography() {
  return (
    // <div className='flex border border-violet-500' >
  <div className='lg:flex gap-16 max-lg:flex-col-reverse justify-end items-center border border-red-900'>
     <Timer></Timer>
    <Roadmap></Roadmap>
   
    </div>
  )
}
