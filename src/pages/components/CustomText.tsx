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
        ease: 'easeOut',
        duration: 1,
      },
    },
  };

export const TypingText = ({title,styling}:{title:string,styling:string}) => (
  <motion.p variants={textContainer} className={`font-normal text-[14px] text-white ${styling}`} >
    {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
            {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({title, styling} : {title: React.ReactNode ,styling:string}) => (
  <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" className={`${styling} mt-[8px] font-bold md:text-[64px] text-[40px] text-white`}>
    {title}
  </motion.h2>
);
