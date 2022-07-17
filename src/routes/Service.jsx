import { motion } from 'framer-motion'
import React from 'react'

const Service = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <h1>Service</h1>
    
    </motion.div>
  )
}

export default Service;