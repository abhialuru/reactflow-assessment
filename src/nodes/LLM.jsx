import { Handle, Position } from '@xyflow/react'
import React from 'react'

function LLM() {
  return (
    <div className='w-40 h-20 border'> 
       <h1 className='text-center font-semibold border-b p-1'>LLM</h1>
       <p className='text-center p-2'>This is a LLM.</p>
       <Handle type='target' position={Position.Left} />
       <Handle type='source' position={Position.Right} />
    </div>
  )
}

export default LLM