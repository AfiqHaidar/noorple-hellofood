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
        opacity: 0,
      x: direction === 'left' ? '-100%' : '100%',
      rotate: 120,
    },
    show: {
        opacity:1,
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
            <motion.div variants={planetVariants('left')} className='flex-1 flex justify-center items-center '>
                <img src="/box-produce.jpg" alt="box" className='w-[90%] h-[90%] object-contain rounded-[50px]' />
            </motion.div>
            <motion.div variants={fadeIn('left','tween',1.5,1)} className='flex-[0.75] flex justify-center flex-col'>
                <TypingText title="| Reason" styling="text-center"/>
                <TitleText title={<>Why HelloFood?</>} styling="text-center"/>
                <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
                    <List imgUrl='/reason-protein.png' text="No skimpin' on the chicken!"/>
                    <List imgUrl='/reason-shipped.png' text="No commitment whatsoever"/>
                    <List imgUrl='/reason-5star.png' text="The most 5-star reviews"/>
                    <List imgUrl='/reason-vegetable.png'text="Fresh and affordable"/>
                </div>
            </motion.div>
        </motion.div>

    </section>
  )
}

export default Box