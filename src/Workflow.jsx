import { addEdge, Background, Controls, MiniMap, ReactFlow, useNodesState, useReactFlow } from '@xyflow/react'
import React, { useCallback, useContext, useRef } from 'react'
import Input from './nodes/Input'
import { v4 as uuidv4 } from 'uuid'
import { globalType } from './App'
import LLM from './nodes/LLM'
import TextNode from './nodes/TextNode'
import Output from './NodesByAbstract/Output'
import Button from './NodesByAbstract/Button'
import Email from './NodesByAbstract/Email'

function Workflow() {

  const {type} = useContext(globalType)
    
    const[nodes, setNodes, onNodesChange] = useNodesState([])
    const[edges, setEdges, onEdgesChange] = useNodesState([])

    const {screenToFlowPosition} = useReactFlow()
    const ReactFlowWrapper = useRef(null)

    const nodeTypes = {
      'customInput': Input,
      'llm': LLM,
      'textNode':TextNode,
      'customOutput': Output,
      'button': Button,
      'email': Email
     }

    const onConnect = useCallback((connection)=>{
          const newEdge = {...connection,id: uuidv4(), animated:true }
          setEdges(prev=>addEdge(newEdge, prev))
    },[edges])

    const onDrop = useCallback((e)=>{
         e.preventDefault();
         if (!type) {
            return
         }
         const position = screenToFlowPosition({
              x:e.clientX,
              y:e.clientY
         })
       const newNode = {id: uuidv4(), type, position}
       setNodes(prev=>[...prev,newNode])
     },[screenToFlowPosition, type, setNodes])


    const onDragOver = useCallback((e)=>{
          e.preventDefault()
          e.dataTransfer.dropEffect = 'move'
    },[])


  return (
    <div ref={ReactFlowWrapper} className='w-full h-96'> 
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          onDrop={onDrop}
          onDragOver={onDragOver}
              >
            <Background/>
            <Controls style={{ color: 'black'}} />
            <MiniMap  />
        </ReactFlow>
    </div>
  )
}

export default Workflow