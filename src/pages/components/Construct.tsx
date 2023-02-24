import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react';

export const fadeIn = ({
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  });

const Construct = () => {

  return (
    <motion.div variants={fadeIn} initial="hidden"  animate="show" className='fixed left-0 top-0 z-50 w-screen h-screen bg-black/70 '>
        <div className='fixed left-[25%] top-[25%] right-[25%] bottom-[25%] flex justify-center items-center rounded-3xl bg-slate-500'>

            <button type='button' className='flex items-center h-fit py-4 px-6 bg-pink-300 rounded-[32px] gap-[12px]'>

                <img src="/right-arrow.png" alt="start" className='w-[24px] h-[24px] object-contain' />
                <span className='font-normal text-[16px] text-black'>exit</span>

            </button>

        </div>
    </motion.div>
  )
}

export default Construct