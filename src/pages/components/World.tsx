import React from 'react'
import { motion } from 'framer-motion'
import { TitleText, TypingText } from './CustomText';
import { useState } from 'react'
import WorldCard from './WorldCard';

const staggerContainer = (staggerChildren : number, delayChildren : number) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });

  export const fadeIn = (direction:string, type:string, delay:number, duration:number) => ({
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });

const World = () => {

  const [active, setactive] = useState('none')

  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
        <motion.div variants={staggerContainer(1,1)} initial="hidden" whileInView="show" viewport={{once: false, amount:0.25}} className='mx-auto flex flex-col items-center'>

          <TypingText title='| World' styling='text-center'/>
          <TitleText title={<>Recipe spread<br className='md:block hidden'/>across the globe</>} styling='text-center'/>

          <motion.div variants={fadeIn('up', 'tween', 0.3, 1 )} className='relative max-w-[1280px] mt-[68px] flex w-full h-[550px]'>

            <img src="/map.png" alt="map" className='w-full h-full object-contain'/>

            
              <WorldCard id='menu-1' position='top-1/2 left-[20%]' imgUrl='/meal-1.jpg' active={active} handleClick={setactive}/>
              <WorldCard id='menu-2' position='top-1/2 right-[45%]' imgUrl='/meal-2.jpg' active={active} handleClick={setactive}/>
              <WorldCard id='menu-3' position='top-1/2 left-[75%]' imgUrl='/meal-3.jpg' active={active} handleClick={setactive}/>
              <WorldCard id='menu-4' position='top-[20%] right-[56%]' imgUrl='/meal-4.jpg' active={active} handleClick={setactive}/>
              <WorldCard id='menu-5' position='top-[30%] left-[5%]' imgUrl='/meal-5.jpg' active={active} handleClick={setactive}/>
              <WorldCard id='menu-6' position='top-[10%] right-[35%]' imgUrl='/meal-6.jpg' active={active} handleClick={setactive}/>
              <WorldCard id='menu-7' position='bottom-[13%] right-[10%]' imgUrl='/meal-7.jpg' active={active} handleClick={setactive}/>
              <WorldCard id='menu-8' position='bottom-[5%] left-[12%]' imgUrl='/meal-8.jpg' active={active} handleClick={setactive}/>
            
            

          </motion.div>

        </motion.div>
    </section>
  )
}

export default World