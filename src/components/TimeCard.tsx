import { MoreHorizontal } from 'lucide-react';

interface TimeCardProps {
  title: string;
  timeframe: 'daily' | 'weekly' | 'monthly';
  current: number;
  previous: number;
  color: string;
}

const timeframeText = {
  daily: 'Yesterday',
  weekly: 'Last Week',
  monthly: 'Last Month'
};

export default function TimeCard({ title, timeframe, current, previous, color }: TimeCardProps) {
  return (
    <div className={`relative rounded-2xl ${color} pt-10 overflow-hidden group`}>
      <div className="absolute inset-x-0 top-0 h-10 flex justify-end pr-6">
        <div className="w-16 h-16 rounded-full bg-current opacity-20 -translate-y-1/2" />
      </div>
      
      <div className="relative bg-[#1c1f4a] rounded-2xl p-6 transition-colors hover:bg-[#34397B] cursor-pointer">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white font-medium">{title}</h2>
          <button 
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="More options"
          >
            <MoreHorizontal size={20} />
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row lg:flex-col gap-2 justify-between">
          <p className="text-3xl lg:text-5xl font-light text-white">{current}hrs</p>
          <p className="text-sm text-gray-400">
            {timeframeText[timeframe]} - {previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}