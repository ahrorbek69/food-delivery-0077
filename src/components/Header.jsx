import React, { useState } from 'react'
import Logo from './img/logo.png'
import { TiShoppingCart } from 'react-icons/ti'
import { GoSearch } from 'react-icons/go'
import { MdLogout, MdAdd } from 'react-icons/md'
import Avatar from './img/avatar.png'
import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import '../style/header.css'
// firebase sign in with google
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.confige'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

const Header = ({data}) => {
console.log(data);
  const [isMenu, setIsMenu] = useState(false)


  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()

  const [{ user, cartShow,cartItems }, dispatch] = useStateValue()

  const login = async () => {
    if (!user) {
      const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)

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





  // const logout = () => {
  //   setIsMenu(false)
  //   localStorage.clear()

  //   dispatch({
  //     type: actionType.SET_USER,
  //     user: null
  //   })
  // }

  const menuLi = [
    {
      display: "Home",
      path: "/"
    },

    {
      display: "About",
      path: "/about"
    },
    {
      display: "Menu",
      path: "/menu"
    },
    {
      display: "Service",
      path: "/service"
    },
  ]


  const Logout = () =>{
    setIsMenu(false)
    localStorage.clear()

    dispatch({
      type: actionType.SET_USER,
      user: null
    })
  }

// scroll header

const [scroll, setScroll] =useState(false)
const changeScroll =()=>{
  if(window.scrollY>=80){
    setScroll(true)
  }
  else{
    setScroll(false)
  }
}
window.addEventListener('scroll', changeScroll)


const showCart = () => {
  dispatch({
    type: actionType.SET_CART_SHOW,
    cartShow: !cartShow
  })
}

  return (
    <header className={scroll ? 'active fixed z-50 w-screen h-[100px] lg:h-auto p-3 px-4 md:p6 md:px-16' : 'fixed  bg-primary shadow-sm z-50 w-screen h-[100px] lg:h-auto p-3 px-4 md:p6 md:px-16'}>
      {/* desktop-table */}
      <div className="hidden relative md:flex w-full items-center justify-between">
        <Link to={'/'} className="flex items-center  gap-2 ">
          <img src={Logo} alt="logo" className=' w-8 object-cover' />
          <p className=' text-headingColor text-xl font-bold'>City</p>
        </Link>
        
          <div className=" shadow-2xl md:absolute md:w-90 md:top-12 md:left-8 lg:absolute lg:w-22 lg:top-1 lg:left-36 flex overflow-hidden bg-slate-200 w-40 h-8 border-orange-500 rounded-2xl border-2 gap-2">
            <form>
              <input type="text" placeholder='Searching ...' className='ml-2 h-full w-180 outline-none border-none  bg-transparent placeholder:italic placeholder:tracking-wider placeholder:text-slate-700'/>
            </form>
            <div className=" w-16 h-full bg-blue-600 ml-auto text-gray-50 flex items-center justify-center"><GoSearch /></div>
          </div>

        <div className="flex items-center gap-8">
          <motion.ul

            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}



            className='flex items-center gap-8'>

            {
              menuLi.map((item, index) => (
                <NavLink onClick={()=> setIsMenu(false)} className={navClass => navClass.isActive ? 'active_menu' : 'text-base text-textColor hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer'} to={item.path} key={index}>{item.display}</NavLink>
              ))
            }

          </motion.ul>

          <div onClick={showCart} className="relative flex items-center justify-center">
            <TiShoppingCart className='text-textColor text-2xl cursor-pointer' />
           {
            cartItems && cartItems.length > 0 && (
              <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cart flex items-center justify-center">
            <p className='text-xs text-white font-semibold'>{cartItems.length}</p>

          </div>
            )
           }
          </div>

          <div className=' relative'>
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar} alt="avatar" className=' rounded-full w-10 min-w-[40px] h-10 select-none
          min-h-[40px] drop-shadow-xl cursor-pointer
          '
              onClick={login}
            />





            {
              isMenu && (
                <motion.div


                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}

                  className="w-40 bg-gray-50 shadow-xl overflow-hidden rounded-lg flex flex-col absolute top-11 right-0">


                  {
                    user && user.email === 'axausa69@gmail.com' && (
                      <Link  onClick={()=> setIsMenu(false)} to={'/createItems'}>
                        <p  className=' rounded-md shadow-md  m-2 p-2 align-center justify-center  flex items-center gap-3 cursor-pointer hover:bg-lime-600 transition-all duration-100 ease-in-out
         bg-lime-500 text-base'>New Items <MdAdd /></p>
                      </Link>
                    )
                  }




                  <p onClick={Logout} className=' m-2 p-2 align-center rounded-md shadow-md justify-center flex items-center gap-3 cursor-pointer hover:bg-red-700 bg-red-500 transition-all duration-100 ease-in-out text-cyan-100 text-base'>Logout <MdLogout /></p>

                </motion.div>
              )
            }




          </div>

        </div>

      </div>



      {/* mobile */}



      <div className="flex md:hidden justify-between w-full">

      <div onClick={showCart} className="relative flex items-center justify-center">
            <TiShoppingCart className='text-textColor text-2xl cursor-pointer' />
            {
            cartItems && cartItems.length > 0 && (
              <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cart flex items-center justify-center">
            <p className='text-xs text-white font-semibold'>{cartItems.length}</p>

          </div>
            )
           }
          </div>



        <Link to={'/'} className="flex items-center  gap-2 ">
          <img src={Logo} alt="logo" className=' w-8 object-cover' />
          <p className=' text-headingColor text-xl font-bold'>City</p>
        </Link>


        <div className=" absolute top-16 left-6 right-6 flex overflow-hidden bg-slate-200 h-8 border-orange-500 rounded-2xl border-2 gap-2">
            <form>
              <input type="text" placeholder='Searching ...' className='ml-2 h-full w-180 outline-none border-none  bg-transparent placeholder:italic placeholder:tracking-wider placeholder:text-slate-700'/>
            </form>
            <div className=" w-16 h-full bg-blue-600 ml-auto text-gray-50 flex items-center justify-center"><GoSearch /></div>
          </div>

        <div className=' relative'>
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar} alt="avatar" className=' rounded-full w-10 min-w-[40px] h-10 select-none
          min-h-[40px] drop-shadow-xl cursor-pointer
          '
            onClick={login}
          />





          {
            isMenu && (
              <motion.div


                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}

                className="w-40 bg-gray-50 shadow-xl overflow-hidden rounded-lg flex flex-col absolute top-11 right-0">


                {
                  user && user.email === 'axausa69@gmail.com' && (
                    <Link onClick={()=> setIsMenu(false)} to={'/createItems'}>
                      <p className='  rounded-md shadow-md  m-2 p-2 align-center justify-center  flex items-center gap-3 cursor-pointer hover:bg-lime-600 transition-all duration-100 ease-in-out
         bg-lime-500 text-base'>New Items <MdAdd /></p>
                    </Link>
                  )
                }

<motion.ul

initial={{ opacity: 0, x: 200 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: 200 }}



className='flex flex-col'>

{
  menuLi.map((item, index) => (
    <NavLink onClick={()=> setIsMenu(false)} className={navClass => navClass.isActive ? 'active_menu' : 'text-base text-textColor hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer'} to={item.path} key={index}>{item.display}</NavLink>
  ))
}

</motion.ul>

                <p
                  onClick={Logout}
                  className=' m-2 p-2 align-center rounded-md shadow-md justify-center flex items-center gap-3 cursor-pointer hover:bg-red-700 bg-red-500 transition-all duration-100 ease-in-out text-cyan-100 text-base'>Logout <MdLogout /></p>

              </motion.div>
            )
          }


          {

          }

        </div>


      </div>
    </header>
  )
}

export default Header