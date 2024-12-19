import React from 'react'
import Button from './Button'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {

  const location = useLocation();


  const isSignupPage = location.pathname === "/signup";
  const buttonText = isSignupPage ? "Login" : "Signup";
  const linkTarget = isSignupPage ? "/login" : "/signup";
  
  return (
    <div className='w-full top-0 items-center h-[70px] sticky z-10 px-5 md:flex justify-between hidden flex-row bg-gradient-to-br from-blue-400  to-blue-700'>
      <h1 className='font-bold text-white text-center'>Welcome Curd</h1>
      
      <Link to={linkTarget}>
       <Button Variant='black' Size='large'>{buttonText}</Button>
      </Link>
    </div>
  )
}

export default Navbar