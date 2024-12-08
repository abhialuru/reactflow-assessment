import React, { useContext } from 'react'
import {globalType} from './App'
 
function Dragging({name, type}) {

  const {setType} = useContext(globalType)
     
       const onDragStart = (e, nodeType)=>{
        setType(nodeType)
        e.dataTransfer.effectAllowed = 'move'
       }

  return (
        <div className='border-white border px-4 p-1 max-w-fit rounded-lg'
        onDragStart={(e)=>onDragStart(e, type)}
        draggable>
          {name}
     
    </div>
  )
}

export default Dragging;