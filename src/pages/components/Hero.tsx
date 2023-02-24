import React from 'react'
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
        <motion.div variants={staggerContainer(1,1)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25}} className='2xl:max-w-[1280px] w-full mx-auto flex flex-col'>

            <div className='flex justify-center items-center flex-col relative z-10'>
                <motion.h1 variants={textVariant(1.1)} className='font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white'>
                    Delish
                </motion.h1> 

                <motion.h1 variants={textVariant(1.2)} className='font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white '>
                    Recipe
                </motion.h1>
            </div>

            <motion.div variants={slideIn('right','tween',0.2,1)} className='relative w-full md:-mt-[20px] -mt-[12px]'>
                <div className='absolute w-full h-[300px] bg-black rounded-tl-[140px] z-[0] -top-[30px]' />
                    <img src="/hero-cover.jpg" alt="hero-cover" className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative'/>
                    <Link href='#reason'>
                        <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
                            <img src="/arrow-reason.png" alt="arrow-reason" className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain'/>
                        </div> 
                    </Link>
                
            </motion.div>

        </motion.div>
    </section>
  )
}

export default Hero