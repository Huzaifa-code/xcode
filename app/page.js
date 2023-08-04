import Link from 'next/link'

import supabase from '../config/supabaseClient';
import Image from 'next/image';
import { createClient } from '@supabase/supabase-js';


export default function Home() {

  // console.log(supabase);
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const supabase = createClient(supabaseUrl, supabaseKey , {
      auth: { persistSession: false },
  })

  
  return (
    <main className="mt-12 gap-y-8 flex flex-col justify-center items-center">
      <div className='flex flex-col gap-y-5 justify-center items-center'>
        <h1 className='text-4xl font-bold'> Learn new skills with <span className='text-indigo-600 text-5xl'>.</span>xcode</h1>
        <Link href="/courses" className='text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg'>Explore Courses</Link>
      </div>
      <Image src='/images/hero.png' width={900} height={700} alt="" />
    </main>
  )
}
