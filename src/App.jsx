import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import{ AnimatePresence } from 'framer-motion'
import { Header , MainContainer , CreateContainer} from './components'
import { About, Home, Menu, Service } from './routes'


const App = () => {

  const location = useLocation()

  return (
    <AnimatePresence 
    exitBeforeEnter
    >
      <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header />

        <main className='mt-24 p-8 w-full'>
          <Routes location={location} key={location.pathname}>
            <Route path='/*' element={<MainContainer />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/server' element={<Service />}/>
            <Route path='/createItems' element={<CreateContainer />}/>
          </Routes>
        </main>
    </div>
    </AnimatePresence>
    
  )
}

export default App
