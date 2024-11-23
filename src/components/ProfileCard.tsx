interface ProfileCardProps {
  timeframe: 'daily' | 'weekly' | 'monthly';
  setTimeframe: (timeframe: 'daily' | 'weekly' | 'monthly') => void;
}

export default function ProfileCard({ timeframe, setTimeframe }: ProfileCardProps) {
  return (
    <div className="bg-[#1c1f4a] rounded-2xl h-full">
      <div className="bg-[#5847eb] p-8 rounded-2xl">
        <div className="flex items-center gap-4 sm:flex-col sm:items-start">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
            alt="Jeremy Robson"
            className="w-16 h-16 rounded-full border-2 border-white"
          />
          <div>
            <p className="text-gray-300 text-sm">Report for</p>
            <h1 className="text-white text-2xl sm:text-3xl font-light">Jeremy Robson</h1>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex sm:flex-col gap-4">
        {['daily', 'weekly', 'monthly'].map((t) => (
          <button
            key={t}
            onClick={() => setTimeframe(t as 'daily' | 'weekly' | 'monthly')}
            className={`capitalize ${
              timeframe === t ? 'text-white' : 'text-gray-400'
            } hover:text-white transition-colors`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}