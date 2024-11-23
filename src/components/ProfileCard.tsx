interface ProfileCardProps {
  timeframe: 'daily' | 'weekly' | 'monthly';
  setTimeframe: (timeframe: 'daily' | 'weekly' | 'monthly') => void;
}

export default function ProfileCard({ timeframe, setTimeframe }: ProfileCardProps) {
  return (
    <article className='bg-dark-blue rounded-2xl h-[203px] sm:h-[200px] lg:h-[518px] w-full sm:w-full lg:w-[255px] flex flex-col'>
      <header className='bg-primary-blue pt-8 pb-8 lg:pb-[88px] px-8 rounded-2xl'>
        <div className='flex items-center lg:items-start gap-4 lg:flex-col'>
          <img
            src='/image-jeremy.png'
            alt='Jeremy Robson'
            className='w-[70px] h-[70px] lg:w-[78px] lg:h-[78px] rounded-full ring-[3px] ring-white'
          />
          <div className='lg:mt-5'>
            <p className='text-pale-blue text-[15px]'>Report for</p>
            <h1 className='text-white text-2xl lg:text-[40px] font-light leading-[1.2]'>Jeremy Robson</h1>
          </div>
        </div>
      </header>

      <nav className='px-8 py-4 sm:py-3 lg:py-6 flex flex-row lg:flex-col justify-between lg:gap-[18px] flex-1'>
        {['daily', 'weekly', 'monthly'].map((t) => (
          <button
            key={t}
            onClick={() => setTimeframe(t as 'daily' | 'weekly' | 'monthly')}
            className={`capitalize text-left text-lg ${
              timeframe === t ? 'text-white' : 'text-desaturated-blue'
            } hover:text-white transition-colors`}>
            {t}
          </button>
        ))}
      </nav>
    </article>
  );
}
