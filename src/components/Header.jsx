import React,{useState} from 'react'
import Logo from './img/logo.png'
import {TiShoppingCart} from 'react-icons/ti'
import {MdLogout,MdAdd} from 'react-icons/md'
import Avatar from './img/avatar.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
// firebase sign in with google
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.confige'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

const Header = () => {

  const [isMenu, setIsMenu] = useState(false)


  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()

  const [{user}, dispatch]= useStateValue()

const login = async () => {
   if(!user) { const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth,provider)

   dispatch({
     type: actionType.SET_USER,
     user: providerData[0],

   })

// localStorage

localStorage.setItem('user', JSON.stringify(providerData[0]))
}
else {
  setIsMenu(!isMenu)
}
}



  return (
    <header className=' fixed z-50 w-screen p-3 px-4 md:p6 md:px-16'>
        {/* desktop-table */}
        <div className="hidden md:flex w-full items-center justify-between">
          <Link to={'/'} className="flex items-center  gap-2 ">
            <img src={Logo} alt="logo" className=' w-8 object-cover' />
            <p className=' text-headingColor text-xl font-bold'>City</p>
          </Link>

          <div className="flex items-center gap-8">
          <motion.ul
          
          initial={{opacity: 0, x: 200}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: 200}}
          
          
          
          className='flex items-center gap-8'>
            <li className='text-base text-textColor hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
            <li className='text-base text-textColor hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
            <li className='text-base text-textColor hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
            <li className='text-base text-textColor hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
          </motion.ul>

          <div className="relative flex items-center justify-center">
              <TiShoppingCart className='text-textColor text-2xl cursor-pointer'/>
              <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cart flex items-center justify-center">
                <p className='text-xs text-white font-semibold'>2</p>
                 
              </div>
          </div>

          <div className=' relative'>
          <motion.img 
          whileTap={{scale: 0.6}}
           src={user ? user.photoURL : Avatar} alt="avatar" className=' rounded-full w-10 min-w-[40px] h-10 select-none
          min-h-[40px] drop-shadow-xl cursor-pointer
          '
          onClick={login}
          />

      



{
  isMenu && (
    <motion.div
    

    initial={{opacity: 0 , scale: 0.6}}
    animate={{opacity: 1 , scale: 1}}
    exit={{opacity: 0 , scale: 0.6}}

    className="w-40 bg-gray-50 shadow-xl overflow-hidden rounded-lg flex flex-col absolute top-11 right-0">


    {
      user && user.email === 'axausa69@gmail.com' && (
        <Link  to={'/createItems'}>
        <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'>New Items <MdAdd /></p>
        </Link>
      )
    }



      
      <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'>Logout <MdLogout /></p>

    </motion.div>
  )
}




          </div>

          </div>

        </div>



        {/* mobile */}


        <div className="flex md:hidden justify-between w-full">
        <Link to={'/'} className="flex items-center  gap-2 ">
            <img src={Logo} alt="logo" className=' w-8 object-cover' />
            <p className=' text-headingColor text-xl font-bold'>City</p>
          </Link>



      
          <div className=' relative'>
          <motion.img 
          whileTap={{scale: 0.6}}
           src={user ? user.photoURL : Avatar} alt="avatar" className=' rounded-full w-10 min-w-[40px] h-10 select-none
          min-h-[40px] drop-shadow-xl cursor-pointer
          '
          onClick={login}
          />

      



{
  isMenu && (
    <motion.div
    

    initial={{opacity: 0 , scale: 0.6}}
    animate={{opacity: 1 , scale: 1}}
    exit={{opacity: 0 , scale: 0.6}}

    className="w-40 bg-gray-50 shadow-xl overflow-hidden rounded-lg flex flex-col absolute top-11 right-0">


    {
      user && user.email === 'axausa69@gmail.com' && (
        <Link  to={'/createItems'}>
        <p className='  rounded-md shadow-md  m-2 p-2 align-center justify-center  flex items-center gap-3 cursor-pointer hover:bg-lime-600 transition-all duration-100 ease-in-out
         bg-lime-500 text-base'>New Items <MdAdd /></p>
        </Link>
      )
    }

<ul
          
          
          className='flex flex-col'>
            <li className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'>Home</li>
            <li className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'>Menu</li>
            <li className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'>About Us</li>
            <li className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'>Service</li>
          </ul>
      
      <p className=' m-2 p-2 align-center rounded-md shadow-md justify-center flex items-center gap-3 cursor-pointer hover:bg-red-700 bg-red-500 transition-all duration-100 ease-in-out text-cyan-100 text-base'>Logout <MdLogout /></p>

    </motion.div>
  )
}




          </div>


        </div>
    </header>
  )
}

export default Header