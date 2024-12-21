import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes/index'


function App() {

  return (
   <div className="w-screen h-auto">
     <div className="">
      <BrowserRouter>
      <Toaster 
         position="bottom-center"
         reverseOrder={false}
         containerStyle={{
           top: 100,
           left: 0,
           right: 0,
           bottom: 0,
         }}
      />
        <AppRoutes/>
      </BrowserRouter>
     </div>
   </div>
  )
}

export default App
