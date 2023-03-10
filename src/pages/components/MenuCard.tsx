import React from 'react'
import { motion } from 'framer-motion'

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

const MenuCard = ({id, imgUrl, title, index, active, handleClick}:{id:string, imgUrl:string, title:string, index:number, active:string, handleClick:any }) => {
  return (
    <motion.div variants={fadeIn('right', 'spring', index*0.5, 0.75)} 
    className={`relative ${active===id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} 
    flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer
    hover:shadow-xl hover:shadow-slate-300 hover:duration-150 hover:rounded-[24px]`}
    onClick={()=> handleClick(id)} >
        <img src={imgUrl} alt="img-card" className='absolute w-full h-full object-cover rounded-[24px]'/>
        {active !== id ? (
            <h3 className='font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'>
                {title}
            </h3>
            ) : (
            <div className='absolute bottom-0 p-8 justify-start w-full flex-col bg-[#00000050] rounded-b-[24px]'>
                <div className='flex justify-center items-center w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]'>
                    <img src="/right-arrow.png" alt="mboh" className='w-1/2 h-1/2 object-contain' />
                </div>
                <p className='font-normal text-[16px] leading-[20px] text-white uppercase'>
                    Explore Recipes
                </p>
                <h2 className='mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white'>
                    {title}
                </h2>
            </div>
        )}
    </motion.div>
  )
}

export default MenuCard