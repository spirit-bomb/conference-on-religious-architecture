import React from 'react'
function ImpDate() {
  return (
    <div className='flex flex-col'>
      <p className='text-2xl pt-3 pb-5'>
      Important Dates:
      </p>

      <div className='py-2 flex flex-row justify-between text-sm md:text-base lg:mr-20 md:px-3 border-y bg-gray-200'>
        <p className=''>
        Abstracts Submission Deadline
        </p>
        <p>
        November 30, 2024
        </p>
      </div>
      <div className='py-2 flex flex-row justify-between text-sm md:text-base lg:mr-20 md:px-3 border-y'>
        <p className=''>
        Full-Text Paper Submission Deadline
        </p>
        <p>
        December 05, 2024
        </p>
      </div>
      <div className='py-2 flex flex-row justify-between text-sm md:text-base lg:mr-20 md:px-3 border-y bg-gray-200'>
        <p className=''>
        Notification of Acceptance/Rejection
        </p>
        <p className='w-1/3 lg:w-auto'>
        Within 15 days of Abstract/full-text paper
        </p>
      </div>
      <div className='py-2 flex flex-row justify-between text-sm md:text-base lg:mr-20 md:px-3 border-y '>
        <p className='w-2/3'>
        Final Paper (Camera Ready) Submission & Early Bird Registration Deadline
        </p>
        <p>
        	 December 20, 2024
        </p>
      </div>
      <div className='py-2 flex flex-row justify-between text-sm md:text-base lg:mr-20 md:px-3 border-y bg-gray-200'>
        <p className=''>
        Conference Dates
        </p>
        <p>
        December 28-29, 2024
        </p>
      </div>
    </div>
  )
}

export default ImpDate