import React from 'react';
import { Button } from 'Components/Button';
import { Result } from 'Components/Result';
import { LeftPanel } from 'Components/LeftPanel';
import { Zap, Brain, MessageCircle, Eye } from 'lucide-react';

function App() {
  const results = [
    { result: 'Reaction', score: 80, color: '#fff5f6', icon: Zap, iconColor: 'red' },
    { result: 'Memory', score: 92, color: '#fefbf2', icon: Brain, iconColor: 'orange'},
    { result: 'Verbal', score: 61, color: '#f2fbfa', icon: MessageCircle, iconColor: 'green' },
    { result: 'Visual', score: 72, color: '#f3f3fd', icon: Eye, iconColor: 'purple' },
  ];

  return (
    <div className='flex flex-col md:justify-center h-screen md:items-center'>
      <div className="flex flex-col md:flex-row h-auto md:w-[50rem] md:shadow-2xl md:rounded-[40px] md:shadow-blue-500/50 md:mx-16">
        <div className='md:w-1/2'>
          <LeftPanel />
        </div>

        <div className='mt-8 px-9 py-4 flex flex-col justify-center md:w-1/2'>
          <span className='text-2xl font-bold'>Summary</span>
          <div className='my-8 overflow-scroll'>
            {results.map(result => 
            <Result 
              key={result.score}
              result={result.result} 
              score={result.score} 
              color={result.color}
              Icon={result.icon}
            />)}

            <Button>Continue</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
