import React from 'react';
import type { SVGComponent } from "types/SVGComponent";

type Props = {
  result: string;
  score: number;
  color: string;
  Icon: SVGComponent;
}

export const Result = ({ result, score, color, Icon }: Props) => {
  return (
    <div className='flex items-center border rounded-xl py-2 pr-2 pl-4 text-l mb-4 h-16' style={{ backgroundColor: `${color}`, borderColor: `${color}` }}>
      <span className='mt-0.5 w-1/5'><Icon className='h-4 w-4' style={{ backgroundColor: `${color}` }} /></span>
      <span className='font-bold w-3/5'>{result}</span>
      <span className='font-extrabold mt-0.5 w-2/5 truncate'>{score}<span className='text-gray-500'> / 100</span></span>
    </div>
  )
}
