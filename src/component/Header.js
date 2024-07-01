import React from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const navigate= useNavigate()
  const userselector=useSelector((state)=>state.user)
  const handlesignout=()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
<div className='flex justify-between'>
{userselector ? (
        <>
          <div className='w-44'>
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
          </div>
          <button onClick={handlesignout} className=''>Sign out</button>
        </>
      ) : (
        <div className='absolute w-32 top-4 left-4 z-10'>
          <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        </div>
      )}
</div>
  )
}

export default Header