import React from 'react'
import { motion } from 'framer-motion'
import { TitleText, TypingText } from './CustomText';
import List from './List'

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

 const planetVariants = (direction: string) => ({
    hidden: {
      x: direction === 'left' ? '-100%' : '100%',
      rotate: 120,
    },
    show: {
      x: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        duration: 1.8,
        delay: 0.5,
      },
    },
  });

const Box = () => {
  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
        <motion.div variants={staggerContainer(1,1)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25}}  className='2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8'>
            <motion.div variants={planetVariants('left')} className='flex-1 flex justify-center items-center'>
                <img src="/hero-cover.jpg" alt="box" className='w-[90%] h-[90%] object-contain' />
            </motion.div>
            <motion.div variants={fadeIn('left','tween',0.2,1)} className='flex-[0.75] flex justify-center flex-col'>
                <TypingText title="Cek Cek ricekkk" styling="text-left"/>
                <TitleText title="HAHA sisis awkidnkawindkanwd asikdnaskind akaisndiasnd"/>
                <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
                    <List angka={1} text="eaaaa"/>
                    <List angka={2} text="haha hihi cuy"/>
                    <List angka={3} text="wkwkkw wkwkw wkwkw"/>
                </div>
            </motion.div>
        </motion.div>

    </section>
  )
}

export default Box