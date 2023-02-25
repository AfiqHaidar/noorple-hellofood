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
            <TypingText title={"| Review"} styling="text-center"/>
            <TitleText title={"Cook it. Love it. Tag it #HelloFoodPics"} styling="text-center"/>

            <div className='mt-[50px] flex flex-col gap-[30px]'>
                <Card imgUrl='\review-1.webp' title='cakniiiii' subtitle='My little nephew chef helping me make dinner tonight and trying out some of his new kitchen utensils I got him!' count={1}/>
                <Card imgUrl='\review-2.webp' title='japf.ood' subtitle='I’m helping out 🧑🏽‍🍳 #masterchef #bestboy' count={2}/>
                <Card imgUrl='\review-3.webp' title='_adriankarunaa' subtitle='Me and my sister made mom n dad dinner tonight! We had our doubts but WOW was it tasty!' count={3}/>
                <Card imgUrl='\review-4.webp' title='pascalcampion' subtitle='We had a cooking class yesterday and we had such an amazing time. 😁 They had such a great time working as a team and I can’t wait for our weekly cooking class 🙌🏻😁' count={4}/>
            </div>
        </motion.div>
    </section>
  )
}

export default Reason