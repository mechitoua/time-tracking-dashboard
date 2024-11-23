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
    <div className='min-h-screen bg-very-dark-blue flex items-center justify-center py-16 px-6'>
      <div className='w-full max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start auto-rows-fr'>
          <div className='lg:row-span-2 flex justify-end h-full'>
            <ProfileCard timeframe={timeframe} setTimeframe={setTimeframe} />
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
