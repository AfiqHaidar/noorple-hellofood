import React, { FormEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { TitleText, TypingText } from './CustomText'
import { MultistepsHook } from './MultistepsHook'
import  LoginForm  from './LoginForm'

type FormData = {
  email: string
  pass: string
}

const initial = {
  email: "",
  pass:"",
}

const MultistepsForm = () => {

  const[data, setData] = useState(initial)

  function updateFields(fields: Partial<FormData>) {
    setData( prev =>{
      return { ...prev, ...fields }
    })
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next} = MultistepsHook([
    <LoginForm {...data} updateFields={updateFields}/>,
    <div>second</div>,
    <div>third</div>,

  ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("yea bou")
  }

const {
        register,
        handleSubmit,
        watch,
        reset,
        getValues,
        formState,
        formState: { errors, isSubmitting, defaultValues, isSubmitSuccessful },
      } = useForm<FormData>({
        defaultValues: {
            email: 'Afiq',
            pass : 'Haidar'
        }
      });

  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12 w-screen h-screen flex justify-center items-center '>
        <div className='mx-auto max-w-[1280px] w-[50%] h-[50%] flex justify-center items-center relative'>
            <form action="" onSubmit={onSubmit} className='flex flex-col gap-3 h-full w-full justify-center items-center'>
                <div className='absolute right-0 top-0'>
                  {currentStepIndex + 1} / {steps.length}
                </div>

                {step}
                <div className='mt-2 flex gap-2'> 

                  {!isFirstStep && <button type="button" onClick={back}>Back</button>}

                  <button >
                    {isLastStep ? "Submit": "Next" }
                  </button>

                </div>

            </form>
        </div>
    </section>
  )
}

export default MultistepsForm