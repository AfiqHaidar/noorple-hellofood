'use client';
import { motion } from "framer-motion";



const textContainer = {
    hidden: {
      opacity: 0,
    },
    show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
  };

  const textVariant2 = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeIn',
      },
    },
  };

export const TypingText = ({title,styling}:{title:string,styling:any}) => (
  <motion.p variants={textContainer} className={'font-normal text-[14px] text-white'} >
    {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
            {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({title}:{title:string}) => (
  <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" className='mt-[8px] font-bold md:text-[64px] text-[40px] text-white text-center'>
    {title}
  </motion.h2>
);
