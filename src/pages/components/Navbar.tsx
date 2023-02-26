import React from 'react'
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link';

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
      <div className='2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8'>

          {/* <img src="/logo.png" alt="logo" className='w-[24px] h-[24-px] object-contain' /> */}

        <h2 className='font-extrabold text-[32px] leading-[30px] text-white'>
          HelloFood
        </h2>

        <div className='flex gap-5 items-center'>
          <div className='opacity-70 hover:opacity-100 hover:scale-105 ease-in duration-300'>
            <Link className='font-normal text-white hover:text-slate-200 ' href="/LoginForm">LOG IN </Link>
          </div>
  
          <div  className='opacity-70 hover:opacity-100 hover:scale-105 ease-in duration-300'>
            <Link className='font-normal text-white hover:text-slate-200 ' href="/ShippingForm">SIGN IN</Link>
          </div>
        </div>

      
      </div>
    </motion.nav>
  )
}

export default Navbar