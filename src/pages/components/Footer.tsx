import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Construct from './Construct';

export const footerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
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
        delay: 0.5,
      },
    },
  };

const Footer = () => {

  const [warning, setWarning] = useState(false);
  function toggle() {
    setWarning(!warning);
  }

  return (
    <motion.footer variants={footerVariants} initial="hidden" animate="show" className='sm:p-16 xs:p-8 px-6 py-8 relative'>
        <div className='footer-gradient'/>

        <div className='2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8'>
            <div className='flex items-center justify-between flex-wrap gap-5'>
                <h4 className='font-bold md:text-[64px] text-[44px] text-white'> whatca waitin for</h4>
                <button type='button' className='flex items-center h-fit py-4 px-6 bg-pink-300 rounded-[32px] gap-[12px]'
                onClick={toggle}>
                    <img src="/right-arrow.png" alt="start" className='w-[24px] h-[24px] object-contain' />
                    <span className='font-normal text-[16px] text-black'>Skuyyyy cuy</span>
                    {warning && (<Construct/>)}
                </button>
        </div>

        <div className='flex flex-col'>
            <div className='mb-[50px] h-[2px] bg-white opacity-10'/>
            <div className='flex items-center justify-between flex-wrap gap-4'>
                <h4 className='font-extrabold text-[24px] text-white'>
                    HelloFood
                </h4>
                <p className='font-normal text-[14px] text-white opacity-50'>
                    Copyright © 2022 - 2023 Metaversus. All rights reserved.
                </p>
                <div className='flex gap-4'>
                    <img src="right-arrow.png" alt="social" className='w-[24px] h-[24px] object-contain cursor-pointer' />
                </div>
            </div>
        </div>
        
        </div>
    </motion.footer>
  )
}

export default Footer