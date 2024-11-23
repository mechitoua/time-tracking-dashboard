interface ProfileCardProps {
  timeframe: 'daily' | 'weekly' | 'monthly';
  setTimeframe: (timeframe: 'daily' | 'weekly' | 'monthly') => void;
}

export default function ProfileCard({ timeframe, setTimeframe }: ProfileCardProps) {
  return (
    <article className='bg-dark-blue rounded-2xl h-[203px] sm:h-[518px] w-full sm:w-[255px] flex flex-col'>
      <header className='bg-primary-blue pt-8 pb-8 sm:pb-[88px] px-8 rounded-2xl'>
        <div className='flex items-center sm:items-start gap-4 sm:flex-col'>
          <img
            src='/image-jeremy.png'
            alt='Jeremy Robson'
            className='w-[70px] h-[70px] sm:w-[78px] sm:h-[78px] rounded-full ring-[3px] ring-white'
          />
          <div className='sm:mt-5'>
            <p className='text-pale-blue text-[15px]'>Report for</p>
            <h1 className='text-white text-2xl sm:text-[40px] font-light leading-[1.2]'>Jeremy Robson</h1>
          </div>
        </div>
      </header>

      <nav className='px-8 py-6 flex flex-row sm:flex-col justify-between sm:gap-[18px] flex-1'>
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
