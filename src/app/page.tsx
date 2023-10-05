"use client"

import { MainButton } from '@/app/components/ui/MainButton'
import { FormInput } from '@/app/components/ui/FormInput'
import { FormEvent, useState, SetStateAction } from 'react'

export default function Home() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => 
  // Currying => evita la recreacion de anonymous functions
  (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('submit');
    
  }

  return (
    <main className="flex min-h-screen justify-center items-center px-5 bg-[#fff]">
      <section className='flex flex-col items-center'>
        <h1 className='text-offBlack text-4xl font-bold'>Welcome<span className='text-sapphire'>.</span></h1>
        <h3 className='text-center text-lg py-8'>Create an account or login to access [name]</h3>
        <form onSubmit={handleSubmit}>
          <FormInput placeholder='jonhdoe@gmail.com' value={email} onChange={handleChange(setEmail)} type='email' labelText='Email Address' />
          <FormInput placeholder='password' value={password} onChange={handleChange(setPassword)} type='password' labelText='Password' />
          <p className='text-sm text-right text-sapphire undeline'>forgot password?</p>
          <MainButton type='submit' className='w-full my-2 bg-sapphire text-offWhite'>Log In</MainButton>
          <FormInput divClassName='text-right' className='border-none outline-none bg-softGray  align-middle ml-2 ' type='checkbox' labelText='Remember me' />
        </form>
        <p className='text-offBlack my-2'>Dont have an account yet?<span className='text-sapphire font-semibold text-base'> Sign up</span></p>
        <p className='font-black text-offBlack my-2'>Or sign in with</p>
      </section>  
    </main>
  )
}
