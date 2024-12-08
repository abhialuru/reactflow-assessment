import React from 'react'
import Dragging from './Dragging'

function Navbar() {
  return (
    <div className='w-full flex gap-4 border-white border-b p-4' > 
        <Dragging name='Input Node' type='customInput' />
        <Dragging name='LLM' type='llm' />
        <Dragging name='Text' type='textNode'/>
        <Dragging name='Output' type='customOutput' />
        <Dragging name='Button' type='button' />
        <Dragging name='Email' type='email' />
    </div>
  )
}

export default Navbar