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
  monthly: 'Last Month',
};

export default function TimeCard({ title, timeframe, current, previous, color }: TimeCardProps) {
  return (
    <article className={`relative pt-[45px] rounded-[1rem] ${color} overflow-hidden h-[160px] sm:h-[244px]`}>
      <header className='absolute top-[-10px] right-4 h-16 flex items-center'>
        <img src={`/icon-${title.toLowerCase().replace(' ', '-')}.svg`} alt={title} className='w-[78px] h-[78px]' />
      </header>

      <main className='bg-dark-blue hover:bg-[#34397B] transition-colors rounded-[1rem] p-6 pt-4 relative z-10 h-[120px] sm:h-[200px]'>
        <div className='flex flex-col sm:block'>
          <div className='flex justify-between items-center mb-[18px] sm:mb-6'>
            <h2 className='text-white font-medium text-lg'>{title}</h2>
            <button className='text-pale-blue hover:text-white transition-colors p-1' aria-label='More options'>
              <img src='/icon-ellipsis.svg' alt='elipsis' className='w-5 h-1' />
            </button>
          </div>

          <div className='flex justify-between items-center sm:block'>
            <p className='text-white text-[32px] sm:text-[56px] font-light leading-[1.1]'>{current}hrs</p>
            <p className='text-pale-blue text-[15px] mt-0 sm:mt-2'>
              {timeframeText[timeframe]} - {previous}hrs
            </p>
          </div>
        </div>
      </main>
    </article>
  );
}
