import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { TitleText, TypingText } from './components/CustomText'
import { useEffect } from 'react';

const staggerContainer = (staggerChildren: number, delayChildren: number) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const zoomIn = (delay:number, duration:number) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

type FormValues = {
  email: string
  pass : string
}

export default function Home() {

  const {
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState,
    formState: { errors, isSubmitting, defaultValues },
  } = useForm<FormValues>({
    defaultValues: {
        email: '',
        pass : ''
    }
  });

  useEffect(()=>{
    if(formState.isSubmitSuccessful){
        reset({
            email:'',
            pass:''
        })
        alert("Successful Login")
    }
}, [formState, reset])


  return (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <link rel="icon" href="/favicon.ico" />
    </Head>


    <main className='bg-gray-700'>
    <section className='sm:p-16 xs:p-8 px-6 py-12 w-screen h-screen flex justify-center items-center '>
      <div className='mx-auto max-w-[1280px] w-full h-full flex justify-center items-center '>
        <form action="" className='flex flex-col gap-4'
          onSubmit={handleSubmit((data)=>{
          console.log(data)
          })}>

          <motion.div className='flex flex-col' variants={staggerContainer(1, 1)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }}>
            <TypingText title='| Account' styling='text-center' />
            <TitleText title='Log In' styling='text-center font-extrabold ' />
          </motion.div>
          
          <motion.div variants={zoomIn(0.4,1)} initial="hidden" whileInView="show" className='flex flex-col gap-2'>
          <input type="text" placeholder='Email' className='p-2 rounded-xl h-9' 
          {...register("email", { required: true, pattern:{
            value:  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }})}/>

          <p className='text-red-300'> {errors.email?.message} </p>

          <input type="password" placeholder='Password' className='p-2 rounded-xl h-9' 
          {...register("pass", { required: true })}/>
          </motion.div>

          <motion.input variants={zoomIn(0.4,1)} initial="hidden" whileInView="show" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 100, damping: 8 }}
            type="submit" className='rounded-full p-1 bg-slate-900 text-white hover:text-slate-900 
                hover:bg-slate-300 cursor-pointer mt-3'/>
        </form>
      </div>
    </section>
    </main>
  </>
  )
}
