import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [issignInForm,setissignInForm]=useState(true);   // to toggel between sign and sign up component

    const toggleform=()=>{
        setissignInForm(!issignInForm);
    }
  return (
    < div
    className='relative w-full h-screen flex items-center justify-center'>
    <Header/>
    
    <div className='absolute w-full'>
        <img className='bg-cover w-full h-lvh 'src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg" alt="background-image" />
    </div>
    <form className='bg-gray-950 p-8 rounded z-20 text-white flex flex-col w-1/3 gap-9 justify-center items-center bg-opacity-85'>
        <h1 className='font-bold text-red-500 text-2xl font-serif '>{issignInForm ? "Sign in" :'Sign Up'}</h1>
        {!issignInForm && <input className='p-3 rounded-lg w-3/4 text-black'type="text" placeholder='Enter Name'/>}

        <input className='p-3 rounded-lg w-3/4 text-black'type="text" placeholder='Enter email'/>
        <input className='p-3 rounded-lg w-3/4 border-none text-black'type="password" placeholder='password'/>
        <button className='p-4 rounded-lg bg-red-500 w-1/3 cursor-pointer text-slate-50'>{issignInForm ? 'Sign in' :'Sign up'}</button>
        <p className='cursor-pointer font-semibold' onClick={toggleform}>{issignInForm ? 'New to Netflix Create Account' :'Already user Sign In?'}</p>

    </form>

    
    </div>
  )
}

export default Login