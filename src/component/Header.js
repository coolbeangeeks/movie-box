import React, { useEffect } from 'react'
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userslice';
import { logo } from '../utils/constant';
import { toggle } from '../utils/ImdbSlice';

const Header = () => {
  const location = useLocation();
  const dispatch=useDispatch()
  const navigate= useNavigate()
  const userselector=useSelector((store)=>store.user)
  const imdbselector=useSelector((store)=>store.imdbmovies?.imdbtoggle)
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
  });


  const handletoggle=()=>{

    if (location.pathname === '/browse') {
      navigate('/imdb');
    } else {
      navigate('/browse');
    }
    dispatch(toggle());
  };
  return (
<div className='flex justify-between'>
{userselector ? (
        <div className='flex justify-between items-center bg-black w-full'>
          <div className='w-20'>
            <img src={logo} alt="logo" />
          </div>
          <button  onClick={handletoggle} type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">IMDB Mov</button>
          <button onClick={handlesignout} className='text-white p-4 text-xl'>Sign out</button>
        </div>
      ) : (
        <div className='absolute w-20 top-4 left-4 z-10'>
          <img src={logo} alt="logo" />
        </div>
      )}
</div>
  )
}

export default Header