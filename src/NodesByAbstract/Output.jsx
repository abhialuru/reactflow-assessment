 import React from 'react'
import AbstractNode from '../AbstractNode'

function Output() {
  return (
     <AbstractNode title='Output' leftHandle={true}>
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
          
     </AbstractNode>
  )
}

export default Output