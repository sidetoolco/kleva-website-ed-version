import { Target, History } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm tracking-wider text-gray-500 mb-6 uppercase">
            Getting Started
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">
            Launch in weeks,
            <br />
            <span className="text-gray-400">not months</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Start with a pilot */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-12 border border-amber-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center text-white mb-6">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="mb-6 text-2xl">Start with a single portfolio and a single agent</h3>
            <p className="text-gray-700 leading-relaxed">
              Most teams begin with a focused pilot – one portfolio, one agent, clearly defined 
              guardrails, and measurable outcomes in weeks. We work directly with your risk, 
              compliance, and operations leaders to design something you'd be comfortable showing 
              to your regulators.
            </p>
          </div>

          {/* Contextual memory */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 border border-blue-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center text-white mb-6">
              <History className="w-7 h-7" />
            </div>
            <h3 className="mb-6 text-2xl">Every interaction builds on the last</h3>
            <p className="text-gray-700 leading-relaxed">
              Each agent remembers what's happened with a borrower: promises to pay, hardship 
              conversations, prior disputes, total-loss discussions, and more. That context shapes 
              what they say, what options they present, and when they escalate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}