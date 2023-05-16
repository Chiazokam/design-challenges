import React  from 'react';

type Props = {
  children: string;
}

export const Button = ({ children }: Props) => {
  return (
    <button className='bg-gray-800 px-4 py-4 rounded-full text-l font-bold text-gray-300 mt-4 w-full'>
      {children}
    </button>
  )
}