import data from '@/data.json';
import ProfileCard from '@components/ProfileCard';
import TimeCard from '@components/TimeCard';
import { useState } from 'react';

const colorMap: Record<string, string> = {
  Work: 'bg-light-red-work',
  Play: 'bg-soft-blue-play',
  Study: 'bg-light-red-study',
  Exercise: 'bg-lime-green-exercise',
  Social: 'bg-violet-social',
  'Self Care': 'bg-soft-orange-self',
};

export default function App() {
  const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly'>('weekly');

  return (
    <div className='min-h-screen bg-very-dark-blue flex items-center justify-center py-6 sm:py-16 px-6'>
      <div className='w-full max-w-[375px] sm:max-w-[600px] lg:max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
          <div className='sm:col-span-2 lg:col-span-1 lg:row-span-2 flex justify-center lg:justify-end'>
            <div className='w-full lg:w-auto'>
              <ProfileCard timeframe={timeframe} setTimeframe={setTimeframe} />
            </div>
          </div>

          {data.map((item) => (
            <TimeCard
              key={item.title}
              title={item.title}
              timeframe={timeframe}
              current={item.timeframes[timeframe].current}
              previous={item.timeframes[timeframe].previous}
              color={colorMap[item.title]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
