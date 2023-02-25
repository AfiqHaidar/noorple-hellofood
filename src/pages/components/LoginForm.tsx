import React from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { TitleText, TypingText } from './CustomText'

const staggerContainer = (staggerChildren: number, delayChildren: number) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

type UserData = {
  email: string,
  pass : string,
}

type FormData = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

const BioForm = ({email, pass, updateFields}:FormData) => {
  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12 w-screen h-screen flex justify-center items-center '>
      <div className='mx-auto max-w-[1280px] w-full h-full flex justify-center items-center'>
        <form action="" className='flex flex-col gap-3'>

          <motion.div className='flex flex-col' variants={staggerContainer(1, 1)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }}>
            <TypingText title='| Account' styling='text-center' />
            <TitleText title='Log In' styling='text-center font-extrabold ' />
          </motion.div>

          <motion.input whileTap={{ scale: 0.97 }} type="text" placeholder='Email' value={email} className='p-2 rounded-xl h-9' 
          onChange={e => updateFields({email: e.target.value})}/>

          <motion.input whileTap={{ scale: 0.97 }} type="text" placeholder='Password' value={pass} className='p-2 rounded-xl h-9' 
           onChange={e => updateFields({pass: e.target.value})}/>

          <motion.input whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 100, damping: 8 }}
            type="submit" className='rounded-full p-1 bg-slate-900 text-white hover:text-slate-900 
                hover:bg-slate-300 cursor-pointer mt-3'/>

        </form>
      </div>
    </section>
  )
}

export default BioForm