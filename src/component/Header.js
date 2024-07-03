import React, { useEffect } from 'react'
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userslice';
import { logo } from '../utils/constant';
const Header = () => {
  const dispatch=useDispatch()
  const navigate= useNavigate()
  const userselector=useSelector((store)=>store.user)
  const handlesignout=()=>{
    signOut(auth).then(() => {

    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  return (
<div className='flex justify-between'>
{userselector ? (
        <div className='flex justify-between bg-black w-full'>
          <div className='w-44'>
            <img src={logo} alt="logo" />
          </div>
          <button onClick={handlesignout} className='text-white p-4 text-xl'>Sign out</button>
        </div>
      ) : (
        <div className='absolute w-32 top-4 left-4 z-10'>
          <img src={logo} alt="logo" />
        </div>
      )}
</div>
  )
}

export default Header