interface ProfileCardProps {
  timeframe: 'daily' | 'weekly' | 'monthly';
  setTimeframe: (timeframe: 'daily' | 'weekly' | 'monthly') => void;
}

export default function ProfileCard({ timeframe, setTimeframe }: ProfileCardProps) {
  return (
    <article className='bg-dark-blue rounded-2xl h-[518px] w-[255px] flex flex-col'>
      <header className='bg-primary-blue pt-8 pb-[88px] px-7 rounded-2xl'>
        <div className='flex items-start gap-4 sm:flex-col sm:items-start'>
          <img
            src='/image-jeremy.png'
            alt='Jeremy Robson'
            className='w-[78px] h-[78px] rounded-full ring-[3px] ring-white'
          />
          <div className='mt-1 sm:mt-5'>
            <p className='text-pale-blue text-[15px]'>Report for</p>
            <h1 className='text-white text-[40px] font-light leading-[1.2]'>Jeremy Robson</h1>
          </div>
        </div>
      </header>

      <nav className='px-7 pt-6 pb-8 flex flex-col gap-[18px] flex-1'>
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
