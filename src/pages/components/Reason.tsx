import React from 'react'
import { motion } from 'framer-motion'
import { TitleText, TypingText } from './CustomText';
import Card from './Card'

const staggerContainer = (staggerChildren : number, delayChildren : number) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });


const Reason = () => {
  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
        <motion.div variants={staggerContainer(1,1)} initial="hidden" whileInView="show" viewport={{once:false, amount: 0.25}} className='2xl:max-w-[1280px] w-full mx-auto flex flex-col'>
            <TypingText title={"why hellofood?"} styling="text-center"/>
            <TitleText title={"CEK BISA GKK"}/>

            <div className='mt-[50px] flex flex-col gap-[30px]'>
                <Card imgUrl='\hero-cover.jpg' title='Check' subtitle='hahahahahhah WKKWKWKWKWKW' count={1}/>
                <Card imgUrl='\hero-cover.jpg' title='Checasdasd  asd asd asd asd asd asd asdas d asd ass ak' subtitle='hahahahahhah WKKWKW KWWWWWWWWWWWWWWWWWWWWWWWWWW sssssss sd as das das das dasKWKWKW' count={2}/>
                <Card imgUrl='\hero-cover.jpg' title='Check' subtitle='hahahahahhah WKKWKWKWKWKW' count={3}/>
                <Card imgUrl='\hero-cover.jpg' title='Check' subtitle='hahahahahhah WKKWKWKWKWKW' count={4}/>
            </div>
        </motion.div>
    </section>
  )
}

export default Reason