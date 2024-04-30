import React from 'react'
import Image from 'next/image'
import { BsDot } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useRouter } from 'next/router'
import JobDetails from '@/pages/frontend/jobDetails/[id]'

export default function JobsCard({ job, posted }) {
    const router = useRouter();
    return (
        <div key={job._id} className='w-full cursor-pointer  transition-all duration-1000  md:w-5/12 m-4 border hover:shadow-xl rounded px-4 md:flex md:flex-wrap'>
            <div className='mb-4 flex  items-center justify-center py-2 '>
                {console.log("url", job.company_logo_url)}
                <Image width={80} height={60} className="flex rounded-full " src={job.company_logo_url} alt="no image" />
                <div className='flex flex-col mx-2 px-2'>
                    <h1 className='text-xl md:text-2xl font-semibold'>{job?.title}</h1>
                    <p className='text-xs sm:text-sm md:text-base text-gray-800'>{job?.company}</p>
                </div>
            </div>
            <div className='mb-4 flex   items-start justify-center py-2 flex-col'>
                <div className='flex  px-2 py-2 items-center justify-center '>
                    <BsDot className='text-4xl font-extrabold text-indigo-600' />
                    <h1 className='text-lg text-gray-900'>Salary :</h1>
                    <p className='text-base  font-semibold'> {job?.salary !== 0 ? job.salary + " LPA" : "Not Disclosed"} </p>
                </div>
                <div className='flex px-2 py-2 items-center  justify-center'>
                    <BsDot className='text-4xl font-extrabold text-indigo-600' />
                    <h1 className='text-lg text-gray-900'>Deadline :</h1>
                    <p className='text-base  font-semibold'>{new Date(`${job?.job_deadline}`).toLocaleDateString('en-GB')}</p>
                </div>
            </div>
            <div className='mb-4 flex flex-col md:flex-wrap md:flex-row w-full justify-between  items-center '>

                <div className='mb-4 flex  items-start justify-center py-2 flex-col'>
                    <div className='flex px-6 rounded-2xl py-1 items-center justify-center bg-indigo-200 text-indigo-900  '>
                        <p>{job?.title} </p>
                    </div>
                </div>
                {
                    posted ? (
                        <button onClick={() => router.push(`/frontend/detailPostedJob/${job?._id}`)} className='my-2 py-2 px-4  border border-indigo-600   rounded flex items-center justify-center transition-all duration-700 hover:bg-indigo-600 hover:text-white text-indigo-600 font-semibold'>View Applications <AiOutlineArrowRight className='mx-2 text-xl' /></button>
                    ) : (

                        <button onClick={() => router.push(`/frontend/jobDetails/${job?._id}`)} className='my-2 py-2 px-4  border border-indigo-600   rounded flex items-center justify-center transition-all duration-700 hover:bg-indigo-600 hover:text-white text-indigo-600 font-semibold'>View Detail <AiOutlineArrowRight className='mx-2 text-xl' /></button>
                    )
                }
            </div>
        </div>
    )
}
