import React from "react"
import AppRoutes from './routes/index'
import { BrowserRouter } from "react-router-dom"


function App() {

  return (
   <div className="w-screen h-auto">
     <div className="">
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
     </div>
   </div>
  )
}

export default App
