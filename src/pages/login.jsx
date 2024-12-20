import React from 'react'
import Heading from '../components/Heading'
import LoginCom from '../components/auth/Login'

const Login = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col bg-white">
      <Heading heading="h1" variant="secondary">
        Welcome Back
      </Heading>
      <div className="md:w-1/2 w-full md:px-0 px-5">
        {/* Sign Up Form */}
        <LoginCom />
      </div>
    </div>
  )
}

export default Login