import React  from 'react';

type Props = {
  children: string;
}

export const Button = ({ children }: Props) => {
  return (
    <button className='bg-gray-800 px-4 py-6 rounded-full text-2xl font-bold text-gray-300 mt-4 w-full'>
      {children}
    </button>
  )
}