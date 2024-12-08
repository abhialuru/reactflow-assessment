 import React, { createContext, useState } from 'react'
import Workflow from './Workflow'
import '@xyflow/react/dist/style.css';
import Navbar from './Navbar';
import { ReactFlowProvider } from '@xyflow/react';
import './App.css'
import Submit from './Submit';


export const globalType = createContext()

 function App() {

   const[type, setType] = useState(null)

   const values = {type, setType}

   return (
     <div>
      <ReactFlowProvider>
        <globalType.Provider value={values}>
        <Navbar/>
        <Workflow/>
        <Submit/>
        </globalType.Provider>
      </ReactFlowProvider>
     </div>
   )
 }
 
 
 export default App