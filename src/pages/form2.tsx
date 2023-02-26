import React from 'react'
import { useForm } from 'react-hook-form'

type FormValues = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: number,
    gender: string,
    isAdmin: boolean,

}

export default function Register() {
    const {register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    return (
        <>
           <main className='bg-gray-800'>
                <section className='flex justify-center min-h-screen items-center'>
                    <form onSubmit={handleSubmit((data)=>{
                        console.log(data);
                    })} className='flex flex-col  gap-y-3'>
                        <p className='text-white font-semibold text-2xl'>React Hook Form</p>

                        <input type='text' {...register("firstName", {
                          required: true, 
                          minLength: 4
                        })} placeholder='First Name'  /> 
                        <input type='text' {...register("lastName",)} placeholder='Last Name'  />
                        <input type="email"{...register("email", {
                          required: true, 
                          pattern: /^\S+@\S+$/i
                          }
                        )}  placeholder="Email"  />
                        <input type="tel" {...register("phoneNumber",{
                          required: true, 
                          minLength:10, 
                          maxLength: 12
                          }
                        )} placeholder="Phone Number"  />
                        <label htmlFor="Gender" >Gender</label>
                        
                        <select {...register("gender", { required: true })}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <label htmlFor="isAdmin" >Admin RPL 2023?</label>
                        
                        <input type="submit" className='rounded w-[384px] h-[48px] cursor-pointer bg-pink-300'/>
                    </form>
                </section>
            </main>
  </>  )
}