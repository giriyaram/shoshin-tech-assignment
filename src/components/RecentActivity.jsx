import React from 'react'

const RecentActivity = () => {
  return (
    <div className=" bg-[#121942] rounded-xl w-full h-full flex flex-col gap-1 border border-gray-300">
        <div className='p-4 bg-[#1a204b] rounded-t-xl'>
            <span className='text-lg font-medium text-white'>Recently Activity</span>
        </div>

        <div className='flex flex-col gap-1 px-4 pt-4 w-full xl:w-4/5'>
            <span className='text-[10px] text-white/60 '>10.40 AM, Fri 10 Sept 2021</span>
            <span className='text-lg font-medium text-white'>You Posted a New Job</span>
            <p className='text-xs text-white/80'>Kindly check the requirements and terms of work and make sure everything is right.</p>
        </div>

        <div className='flex flex-col gap-2 justify-start p-4 items-start lg:flex-row lg:justify-between lg:items-center pb-2'>
            <span className='text-xs  text-white'>Today you makes 12 Activity</span>
            <button className='py-2 px-4 bg-vaistumOrange text-white text-xs rounded-md'>See all Activity</button>
        </div>
    </div>
  )
}

export default RecentActivity