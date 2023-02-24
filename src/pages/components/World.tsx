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

          <TypingText title='| Menu' styling='text-center'/>
          <TitleText title={<>Choose the menu <br className='md:block hidden'/>to your liking</>} styling='text-center'/>

          <motion.div variants={fadeIn('up', 'tween', 0.3, 1 )} className='relative max-w-[1280px] mt-[68px] flex w-full h-[550px]'>

            <img src="/map.png" alt="map" className='w-full h-full object-contain'/>

            
              <WorldCard id='menu-1' position='top-1/2 left-[20%]' imgUrl='/meal-vegan.jpg' active={active} handleClick={setactive}/>
              <WorldCard id='menu-2' position='top-1/2 right-[45%]' imgUrl='/meal-vegan.jpg' active={active} handleClick={setactive}/>
            
            

          </motion.div>

        </motion.div>
    </section>
  )
}

export default World