import { Handle, Position } from '@xyflow/react';
import React, { useRef, useState } from 'react'

function TextNode() {

  const textRef = useRef(null)

  const [showHandle, setShowHandle] = useState(false);

  const variablePattern = /{{\s*[\w\d$_]+(\.[\w\d$_]+)*\s*}}/;

  function autoHeight() {
   const textarea =  textRef.current;
   textarea.style.height = 'auto';
   textarea.style.height = `${textarea.scrollHeight}px`;

   const content = textarea.value;
    if (variablePattern.test(content)) {
      setShowHandle(true);  
    } else {
      setShowHandle(false);  
    }
  }

  return (
    <div  className='w-44 rounded-xl border border-white hover:border-blue-400 bg-[#141414] flex flex-col'> 
         <h1 className='w-full p-1 text-lg font-semibold text-center border-white border-b' >Text</h1>
         <div className='p-1'>
          Text
         <textarea ref={textRef} onChange={autoHeight} className='w-full h-7 p-1 text-sm bg-transparent outline-none border resize-none overflow-hidden' rows={1}/>
         </div>
        {showHandle && <Handle type='target' position={Position.Left} />}
    </div>
  )
}

export default TextNode;