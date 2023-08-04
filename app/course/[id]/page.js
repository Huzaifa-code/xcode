import React from 'react'
import data from '../../../data/data'

const page = ({params}) => {

    const item = data.at(params.id-1);
    const videos = item.video_ids

  return (
    <div className='flex flex-col justify-center items-center py-16'>
        <h1 className='text-4xl font-bold text-indigo-700'>{item.course_name}</h1>
        <p className='text-xl my-4 font-medium'>{item.description}</p>

        <div className='my-8'>
            {
                videos.map((id, key) => {
                    return (
                        <div className='my-11' >
                            <h1 className='my-2 text-xl font-semibold'>Lecture : {key+1}</h1>
                            <iframe className='rounded-xl' width="760" height="515" src={`https://www.youtube.com/embed/${id}?si=w1ZK_w4M1EAOFrTO`} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        </div>
                    )
                })
            }
        </div>
       
    </div>
  )
}

export default page