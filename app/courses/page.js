import React from 'react'
import Link from 'next/link';
import data from '../../data/data';

const Courses = () => {
  return (
    <div className='flex flex-col gap-y-11 justify-center items-center py-11'>
      <div className='flex flex-col gap-y-2 justify-center items-center'>
        <h1 className='text-3xl font-bold'>Courses</h1>
        <h1 className='text-xl font-medium'>Login to unlock all courses </h1>
      </div>
      
      <div className='grid grid-cols-3 gap-8 my-4'>
      {
        data.map((item, key) => {
          return (
            <div className="flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md my-4">
              
              <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img
                  src={item.image_link}
                  alt="img-blur-shadow"
                  layout="fill"
                />
              </div>

              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {item.course_name}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  {item.description}
                </p>
                <p className='my-2 font-semibold text-amber-500'>{item.course_type}</p>
              </div>

              <div className="p-6 pt-0">
                <Link href={`/course/${item.id}`} className="select-none rounded-lg bg-indigo-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" >
                  Start Learning
                </Link>
              </div>

            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Courses