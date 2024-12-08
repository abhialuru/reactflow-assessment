import { Handle, Position } from '@xyflow/react'
import React from 'react'

function Input() {


  return (
    <div className='h-40 w-44 rounded-xl border border-white hover:border-blue-400 bg-[#141414] flex flex-col'> 
         <h1 className='w-full p-1 text-lg font-semibold text-center border-white border-b' >Input</h1>
        <label className='p-1 px-2'>
          Input 
          <input className='outline-none w-[100%] bg-transparent border-white border' type="text" />
        </label>
        <label className='p-1 px-2'>
          Type
             <select className='w-[100%] bg-transparent border-white border' name="Text" >
              <option className='bg-black' value="Text">Text</option>
              <option className='bg-black' value="File">File</option>
             </select>
        </label>
        <Handle type='source' position={Position.Right} />
        <Handle type='target' position={Position.Left} />
    </div>
  )
}

export default Input