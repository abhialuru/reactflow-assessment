import React from 'react'
import AbstractNode from '../AbstractNode'

function Button() {
  return (
    <AbstractNode title='Button' rightHandle={true} >
          <label className='p-1 px-2'>
          Button Name 
          <input className='outline-none w-[100%] bg-transparent border-white border' type="text" />
        </label>
        <label className='p-1 px-2'>
          Button Action 
          <input className='outline-none w-[100%] bg-transparent border-white border' type="text" />
        </label>
    </AbstractNode>
  )
}

export default Button