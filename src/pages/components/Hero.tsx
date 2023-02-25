import React, { useState } from 'react'
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link';

const staggerContainer = (staggerChildren : number, delayChildren : number) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });

const slideIn = (direction:string, type:string, delay:number, duration:number) => ({
  hidden: {
    opacity:0,
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    opacity:1,
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

const textVariant = (delay:number) => ({
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay,
      },
    },
  });

const Hero = () => {

  return (
    <section className='sm:py-16 xs:py-8 py-12 sm:pl-16 pl-6'>
        <motion.div variants={staggerContainer(1,1)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25}} 
        className='2xl:max-w-[1280px] w-full mx-auto flex flex-col'>

            

            <motion.div variants={slideIn('right','tween',0.2,1)} className='relative w-full md:-mt-[20px] -mt-[12px]'>
          
                <img src="/hero-cover.jpg" alt="hero-cover" className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative'/>
                <div className='absolute z-10  left-[380px] top-48'>
                  <motion.h1 variants={textVariant(1.1)} 
                  className='h-14 font-bold lg:text-[50px] md:text-[30px] sm:text-[10px] text-[10px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-slate-700'>
                    Take the stress
                  </motion.h1> 

                  <motion.h1 variants={textVariant(1.2)} 
                  className=' font-bold lg:text-[50px] md:text-[30px] sm:text-[10px] text-[20px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-slate-700 '>
                    out of mealtime
                  </motion.h1>
            </div>
            </motion.div>

        </motion.div>
    </section>
  )
}

export default Hero