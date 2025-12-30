import { MessageSquare, Network, TrendingUp } from 'lucide-react';

export function KeyBenefits() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm tracking-wider text-gray-500 mb-6 uppercase">
            The Kleva Difference
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">
            Built for lenders,
            <br />
            <span className="text-gray-400">not retrofitted</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <BenefitCard
            icon={<MessageSquare className="w-6 h-6" />}
            title="Natural, empathetic conversations"
            description="Kleva delivers personalized conversations that feel human. Always available, endlessly patient, and able to reason, predict, and act in real-time."
          />
          <BenefitCard
            icon={<Network className="w-6 h-6" />}
            title="Connect to your call center ecosystem"
            description="Seamlessly integrate with your existing technology stack, with comprehensive summaries and intelligent routing when escalation is required."
          />
          <BenefitCard
            icon={<TrendingUp className="w-6 h-6" />}
            title="Scale consistent experiences"
            description="Build once and run everywhere, with a continuously-improving, trusted AI agent tailored to your brand, goals, and processes."
          />
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