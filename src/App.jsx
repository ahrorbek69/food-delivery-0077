import React, { useEffect } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import{ AnimatePresence } from 'framer-motion'
import { Header, Detelies , MainContainer , CreateContainer} from './components'
import { About, Home, Menu, Service } from './routes'
import { useStateValue } from './context/StateProvider'
import { getAllFoodItems } from './utils/firebaseFunctions'
import { actionType } from './context/reducer'


const App = () => {

  const location = useLocation()

  const [{foodItems}, dispatch] = useStateValue()

  
  
  const fetchData = async () => {
    await getAllFoodItems().then(data => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data
      })
    })
    console.log(foodItems);
  }
  
  useEffect(() => {
    fetchData()
  } , [])
  
  const data= foodItems
  console.log(data);

  return (
    <AnimatePresence 
    exitBeforeEnter
    >
      <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header />

        <main className='mt-16 md:24 py-8 px-4 md:px-16 w-full'>
          <Routes location={location} key={location.pathname}>
            <Route exact path='/*' element={<MainContainer />}/>
            <Route path='/menu' element={<Menu />}/>


            <Route path={data && `detelies/:${data.id}`} element={<Detelies data={data}/>}/>


            
            <Route path='/home' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/service' element={<Service />}/>
            <Route path='/createItems' element={<CreateContainer />}/>
          </Routes>
        </main>
    </div>
    </AnimatePresence>
    
  )
}

export default App
