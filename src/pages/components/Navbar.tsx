import React from 'react'
'use client'
import { motion } from 'framer-motion'

const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 1,
    },
  },
};

const Navbar = () => {
  return (
    <motion.nav variants={navVariants} initial="hidden" whileInView="show" className='sm:px-16 px-6 py-8 relative '>
      <div className='absolute w-[50%] inset-0  gradient-01'/>
      <div className='2xl:max-w-[1280px] w-full mx-auto flex justify-center gap-8'>
        
        <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>
          HelloFood
        </h2>

        {/* <img src="/logo.png" alt="logo" className='w-[24px] h-[24-px] object-contain' /> */}
      </div>
    </motion.nav>
  )
}

export default Navbar