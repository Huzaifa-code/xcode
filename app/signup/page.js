'use client'

import { createClient } from '@supabase/supabase-js'
import React from 'react'
import { useState } from 'react'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);



const Signup = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    router.push('/signin')
  }


  return (
    <>
      <h1 className='text-center font-bold text-3xl my-7 text-indigo-700'>Create new account</h1>

      <div className="py-11 flex flex-col items-center justify-center" >
        <div className=" flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md" >

          <div className="mt-10">
            
            <form action="#">
              <div className="flex flex-col mb-5">
                <label htmlFor="email" className="mb-1 text-xs tracking-wide text-gray-600" > E-Mail Address: </label>
                <div className="relative">
                  <div className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400" >
                    <i className="fas fa-at text-blue-500"/>
                  </div>

                  <input id="email" type="email" name="email" className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Enter your email" />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600" >Password: </label>
                <div className="relative">
                  <div className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400" >
                    <span>
                      <i className="fas fa-lock text-blue-500" />
                    </span>
                  </div>

                  <input id="password" type="password" name="password" className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Enter your password" />
                </div>
              </div>

              <div className="flex w-full">
                <button onClick={handleSignUp} className="  flex  mt-2  items-center  justify-center  focus:outline-none  text-white text-sm  sm:text-base  bg-indigo-500  hover:bg-indigo-600  rounded-2xl  py-2  w-full  transition  duration-150  ease-in" >
                  <span className="mr-2 uppercase">Create</span>
                  <span>
                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
          </div>
        
      </div>
    </>
  )
}

export default Signup