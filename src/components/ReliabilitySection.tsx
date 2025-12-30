import { MessageSquare, Network, TrendingUp } from 'lucide-react';

export function ReliabilitySection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Reliability Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <div className="text-sm tracking-wider text-gray-500 mb-6 uppercase">
              The Kleva Difference
            </div>
            <h2 className="text-4xl md:text-6xl">
              Built for lenders,<br />
              <span className="text-gray-400">not retrofitted</span>
            </h2>
          </div>
        </div>
        

        {/* Three Column Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Built for scale */}
          <div className="bg-[#F5F1E8] rounded-lg p-8 flex flex-col justify-between min-h-[400px]">
            <div>
              <h3 className="mb-6">Natural, empathetic conversations</h3>
              <p className="text-gray-600 mb-8">
                Kleva delivers personalized conversations that feel human. Always available, endlessly patient, and able to reason, predict, and act in real-time.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-600">Outbound email - Carrier</div>
              </div>
              <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded">CAPI</div>
            </div>
          </div>

          {/* Performance you can trust */}
          <div className="bg-[#E8A661] rounded-lg p-8 flex flex-col justify-between min-h-[400px]">
            <div>
              <h3 className="mb-6 text-white">Connect to your call center ecosystem</h3>
              <p className="text-white/90 mb-8">
                Seamlessly integrate with your existing technology stack, with comprehensive summaries and intelligent routing when escalation is required.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-8 relative">
              <div className="text-center">
                <div className="text-sm text-white/80 mb-2">Completions</div>
                <div className="text-5xl text-white mb-2">4231</div>
                <div className="text-xs text-white/70">+37% from last month</div>
              </div>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="8"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="rgba(255,255,255,0.6)"
                  strokeWidth="8"
                  strokeDasharray="565"
                  strokeDashoffset="140"
                  transform="rotate(-90 100 100)"
                />
              </svg>
            </div>
          </div>

          {/* Built-in supervision */}
          <div className="bg-[#F5F1E8] rounded-lg p-8 flex flex-col justify-between min-h-[400px]">
            <div>
              <h3 className="mb-6">Scale consistent experiences</h3>
              <p className="text-gray-600 mb-8">
                Build once and run everywhere, with a continuously-improving, trusted AI agent tailored to your brand, goals, and processes.
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 flex items-start gap-2 shadow-sm">
                <div className="w-6 h-6 bg-black rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">K</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500">Kleva 3:15 PM</div>
                  <div className="text-sm">We're offering $800 on this one would you like to book it?</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 flex items-start gap-2 shadow-sm">
                <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-gray-600 text-xs">C</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500">Carrier 3:15 PM</div>
                  <div className="text-sm">What about $1800?</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 flex items-start gap-2 shadow-sm">
                <div className="w-6 h-6 bg-black rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">K</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500">Kleva 3:15 PM</div>
                  <div className="text-sm">I could do $860</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex flex-col group hover:transform hover:-translate-y-2 transition-all">
      <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg">
        {icon}
      </div>
      <h3 className="mb-4 text-xl">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
