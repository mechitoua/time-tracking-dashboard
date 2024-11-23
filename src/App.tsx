import { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import TimeCard from './components/TimeCard';
import data from './data.json';

const colorMap: Record<string, string> = {
  Work: 'bg-[#ff8c66]',
  Play: 'bg-[#56c2e6]',
  Study: 'bg-[#ff5c7c]',
  Exercise: 'bg-[#4acf81]',
  Social: 'bg-[#7536d3]',
  'Self Care': 'bg-[#f1c75b]',
};

export default function App() {
  const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly'>('weekly');

  return (
    <div className='min-h-screen bg-dark-blue py-16 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='lg:row-span-2'>
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
