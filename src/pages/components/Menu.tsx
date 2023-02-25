import React from 'react'
import { motion } from 'framer-motion'
import { TitleText, TypingText } from './CustomText';
import { useState } from 'react'
import MenuCard from './MenuCard';

const staggerContainer = (staggerChildren : number, delayChildren : number) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });

const Menu = () => {

  const [active, setactive] = useState('menu-2')

  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12 '>
        <motion.div variants={staggerContainer(1,1)} initial="hidden" whileInView="show" viewport={{once: false, amount:0.25}} className='mx-auto flex flex-col 2xl:max-w-[1280px] w-full'>
            <TypingText title='| Menu' styling='text-center'/>
            <TitleText title={<>Over 30+ fresh recipes<br className='md:block hidden'/>every week</>} styling='text-center'/>

            <div className='mt-[50px] flex lg:flex-row flex-col max-lg:min-h-[70vh] lg:h-full gap-5 '>
                <MenuCard id="menu-1" imgUrl="/meal-diet.jpg" title="FIT & WHOLESOME" index={1} active={active} handleClick={setactive}/>
                <MenuCard id="menu-2" imgUrl="/meal-meat.jpg" title="MEAT MANIA" index={2} active={active} handleClick={setactive}/>
                <MenuCard id="menu-3" imgUrl="/meal-quick.jpg" title="QUICK & EASY" index={3} active={active} handleClick={setactive}/>
                <MenuCard id="menu-4" imgUrl="/meal-seafood.jpg" title="SEAFOOD BREEZE" index={4} active={active} handleClick={setactive}/>
                <MenuCard id="menu-5" imgUrl="/meal-vegan.jpg" title="VEGAN FRIENDLY" index={5} active={active} handleClick={setactive}/>
            </div>
        </motion.div>
    </section>
  )
}

export default Menu