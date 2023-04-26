import React from 'react';
import classNames from "classnames";
import { clsx } from 'clsx';
import type { SVGComponent } from "types/SVGComponent";

type Props = {
  result: string;
  score: number;
  color: string;
  Icon: SVGComponent;
}

export const Result = ({ result, score, color, Icon }: Props) => {
  return (
    <div className='flex content-center border rounded-xl py-2 pl-4 text-lg mb-4 h-[4.5rem]' style={{ backgroundColor: `${color}`, borderColor: `${color}` }}>
      <span className='mt-0.5 w-1/5'><Icon className='h-4 w-4' style={{ backgroundColor: `${color}` }} /></span>
      <span className='font-bold w-3/5'>{result}</span>
      <span className='text-xs font-bold mt-0.5 w-1/5'>{score}<span className='text-gray-500'> / 100</span></span>
    </div>
  )
}
