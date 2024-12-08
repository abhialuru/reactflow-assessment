 import { Handle, Position } from '@xyflow/react'
import React from 'react'
 
 function AbstractNode({title, children, leftHandle, rightHandle}) {
   return (
    <div className='h-fit w-44 rounded-xl border border-white hover:border-blue-400 bg-[#141414] flex flex-col'> 
         <h1 className='w-full p-1 text-lg font-semibold text-center border-white border-b' >{title}</h1>
         {children}
         {leftHandle && <Handle type='target' position={Position.Left} />}
         {rightHandle && <Handle type='source' position={Position.Right} />}
     </div>
   )
 }
 
 export default AbstractNode;