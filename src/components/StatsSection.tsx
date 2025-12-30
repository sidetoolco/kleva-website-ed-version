export function StatsSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Headline */}
          <div>
            <div className="text-sm tracking-wider text-gray-400 mb-6 uppercase">
              Proven Results
            </div>
            <h2 className="mb-8 text-4xl md:text-6xl text-white">
              Redefining
              <br />
              <span className="text-gray-400">your velocity</span>
              <br />
              & scale
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Real metrics from lenders who deployed Kleva in production environments.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
              Start a Pilot
            </button>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            <StatCard
              value="100%"
              label="Response rate"
              description="Stay on top of everything, all the time. Nothing slips through the cracks."
            />
            <StatCard
              value="0min"
              label="First response time"
              description="Provide best-in-class customer service and beat the competition."
            />
            <StatCard
              value="120x"
              label="ROI"
              description="On $$$ generating tasks."
            />
            <StatCard
              value="10x"
              label="Cost reduction"
              description="On manual overhead."
            />
          </div>
        </div>

        {/* Full Width Dashboard Visualization */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative bg-gradient-to-br from-teal-900 via-slate-800 to-slate-900 h-[500px] overflow-hidden">
            {/* Horizon/Landscape base */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
            
            {/* Mountain silhouettes */}
            <div className="absolute bottom-0 left-0 right-0 opacity-40">
              <svg className="w-full h-48" viewBox="0 0 1200 200" preserveAspectRatio="none">
                <path d="M0,200 L0,120 L200,80 L400,140 L600,60 L800,100 L1000,90 L1200,120 L1200,200 Z" fill="#1e293b" opacity="0.6"/>
                <path d="M0,200 L0,140 L150,100 L350,160 L550,80 L750,130 L950,110 L1200,140 L1200,200 Z" fill="#0f172a" opacity="0.8"/>
              </svg>
            </div>

            {/* Floating geometric shapes - representing data/money flow */}
            {/* Large containers */}
            <div className="absolute top-[15%] right-[5%] w-32 h-20 bg-gradient-to-br from-orange-600 to-orange-700 shadow-2xl transform rotate-12 opacity-90 animate-float" style={{ animationDelay: '0s', animationDuration: '8s' }}>
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
            </div>
            
            <div className="absolute top-[8%] left-[3%] w-40 h-24 bg-gradient-to-br from-slate-700 to-slate-800 shadow-2xl transform -rotate-6 opacity-80 animate-float" style={{ animationDelay: '1s', animationDuration: '10s' }}>
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black/20"></div>
            </div>

            {/* Medium containers scattered */}
            <div className="absolute top-[25%] left-[15%] w-20 h-12 bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl transform rotate-45 opacity-75 animate-float" style={{ animationDelay: '2s', animationDuration: '9s' }}></div>
            
            <div className="absolute top-[35%] right-[25%] w-24 h-14 bg-gradient-to-br from-slate-600 to-slate-700 shadow-xl transform -rotate-12 opacity-70 animate-float" style={{ animationDelay: '0.5s', animationDuration: '11s' }}></div>
            
            <div className="absolute top-[18%] left-[45%] w-16 h-10 bg-gradient-to-br from-teal-700 to-teal-800 shadow-xl transform rotate-20 opacity-80 animate-float" style={{ animationDelay: '1.5s', animationDuration: '7s' }}></div>

            {/* Small containers - representing individual transactions */}
            <div className="absolute top-[30%] left-[25%] w-12 h-8 bg-gradient-to-br from-orange-600 to-red-700 shadow-lg transform rotate-15 opacity-60 animate-float" style={{ animationDelay: '3s', animationDuration: '6s' }}></div>
            
            <div className="absolute top-[45%] right-[15%] w-10 h-6 bg-gradient-to-br from-slate-500 to-slate-600 shadow-lg transform -rotate-30 opacity-65 animate-float" style={{ animationDelay: '2.5s', animationDuration: '8s' }}></div>
            
            <div className="absolute top-[40%] left-[35%] w-14 h-9 bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg transform rotate-8 opacity-55 animate-float" style={{ animationDelay: '1s', animationDuration: '9s' }}></div>

            <div className="absolute top-[50%] left-[60%] w-8 h-5 bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg transform -rotate-20 opacity-50 animate-float" style={{ animationDelay: '4s', animationDuration: '7s' }}></div>

            {/* Tiny distant containers */}
            <div className="absolute top-[55%] left-[50%] w-6 h-4 bg-slate-700 shadow transform rotate-12 opacity-40 animate-float" style={{ animationDelay: '0s', animationDuration: '10s' }}></div>
            <div className="absolute top-[58%] right-[40%] w-5 h-3 bg-orange-700 shadow transform -rotate-8 opacity-35 animate-float" style={{ animationDelay: '2s', animationDuration: '11s' }}></div>
            <div className="absolute top-[60%] left-[70%] w-7 h-4 bg-slate-600 shadow transform rotate-25 opacity-30 animate-float" style={{ animationDelay: '3s', animationDuration: '9s' }}></div>
            <div className="absolute top-[62%] left-[20%] w-4 h-3 bg-orange-600 shadow transform -rotate-15 opacity-30 animate-float" style={{ animationDelay: '1s', animationDuration: '8s' }}></div>

            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center text-white px-6">
                <div className="text-sm tracking-widest text-gray-300 mb-4 uppercase opacity-80">Autonomous Collections</div>
                <div className="text-4xl md:text-5xl mb-2">AI agents working 24/7</div>
                <div className="text-gray-300 text-lg">Transforming complexity into results</div>
              </div>
            </div>

            {/* Atmospheric fog effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-teal-900/20 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  description: string;
}

function StatCard({ value, label, description }: StatCardProps) {
  return (
    <div className="border-t-2 border-white/30 pt-6 group hover:border-white transition-colors">
      <div className="text-5xl md:text-6xl mb-3 group-hover:scale-105 transition-transform inline-block">{value}</div>
      <div className="mb-3 text-xl text-white">{label}</div>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}