import React from 'react';

export const LeftPanel = () => {
  return (
    <div className='md:h-full bg-gradient-to-t from-[#4433F0] via-[#4B36f3] to-[#6540FC] p-8 rounded-b-[40px] md:rounded-[40px] md:justify-center flex flex-col gap-6 items-center'>
      <span className='text-2xl font-semibold text-gray-300'>Your Result</span>

      <div className='border w-48 h-48 rounded-full border-[#4A24CF] my-8 p-4 bg-[#4A24CF] flex flex-col items-center justify-center'>
        <div className='bottom-0 text-7xl font-extrabold text-gray-100'>76</div>
        <div className='text-lg font-semibold text-gray-300 mt-4'>of 100</div>
      </div>

      <span className='text-3xl font-semibold text-white'>Great</span>
      <span className='text-xl font-semibold text-gray-300 text-center mt-4 max-w-80 md:max-w-60'>You scored higher than 65% of the people who have taken these tests</span>
    </div>
  )
}