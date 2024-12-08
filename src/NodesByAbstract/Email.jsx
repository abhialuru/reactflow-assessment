import React from 'react'
import AbstractNode from '../AbstractNode'

function Email() {
  return (
    <AbstractNode title='Email' leftHandle={true}>
       <label className='p-1 px-2'>
          Email 
          <input className='outline-none w-[100%] bg-transparent border-white border' type="email" />
        </label>
    </AbstractNode>
  )
}

export default Email