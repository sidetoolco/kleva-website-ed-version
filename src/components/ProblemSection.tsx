import { Wrench, Package, Shield } from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <div className="text-sm tracking-wider text-gray-500 mb-6 uppercase">
            The Challenge
          </div>
          <h2 className="mb-6 text-4xl md:text-6xl">
            The Problem With AI
            <br />
            <span className="text-gray-400">in Lending Today</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Large financial institutions can absorb long implementation cycles, custom engineering, 
            and extended pilots. Most lenders cannot.
          </p>
          <p className="text-gray-600 text-lg md:text-xl mt-4">
            For many teams, AI adoption stalls due to three persistent barriers.
          </p>
        </div>

        {/* Three Problems */}
        <div className="space-y-20">
          <ProblemCard
            number="1"
            icon={<Wrench className="w-6 h-6" />}
            title="Custom Builds Require Engineering Resources Most Lenders Don't Have"
            description="Traditional AI deployments often require significant upfront investment: infrastructure, data preparation, model tuning, maintenance, and monitoring."
            details="When ROI timelines stretch months or years, these costs can be challenging to justify. Custom implementations can also create vendor dependencies—configuration changes may require engineering support."
            solution="Lenders benefit from AI that deploys quickly, can be configured without engineering, and scales economically from day one."
          />

          <ProblemCard
            number="2"
            icon={<Package className="w-6 h-6" />}
            title="Off-the-Shelf Solutions Don't Fit Lending Workflows"
            description="Most AI agent builders are built for general enterprise use, not regulated lending operations."
            details="These platforms lack the pre-built workflows lenders actually need: collections outreach with FDCPA compliance, verification calls with identity confirmation protocols, welcome calls with autopay enrollment guidance, inbound servicing with negotiation parameters."
            solution="Building these workflows from scratch defeats the purpose of using a platform. Lenders need lending-specific agents ready to deploy, not blank canvases."
          />

          <ProblemCard
            number="3"
            icon={<Shield className="w-6 h-6" />}
            title="Compliance Risk Is Difficult to Validate Before Deployment"
            description="In lending, the primary consideration for AI adoption is regulatory compliance, not technical capability."
            details="AI systems must demonstrate fair treatment, explain decisions, and satisfy audit requirements. Generic platforms that lack transparency or lending-specific compliance controls create challenges for compliance teams and increase regulatory exposure."
            solution="Without the ability to test agents against real borrower scenarios before deployment, compliance risk remains guesswork."
          />
        </div>
      </div>
    </section>
  );
}

interface ProblemCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
  solution: string;
}

function ProblemCard({ number, icon, title, description, details, solution }: ProblemCardProps) {
  return (
    <div className="grid lg:grid-cols-12 gap-8 items-start group">
      {/* Number and Icon */}
      <div className="lg:col-span-2 flex items-center gap-4">
        <div className="text-7xl md:text-8xl text-gray-100 group-hover:text-gray-200 transition-colors">{number}</div>
        <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="lg:col-span-10 bg-white rounded-xl p-8 shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
        <h3 className="mb-4 text-2xl">{title}</h3>
        <p className="text-gray-600 mb-4 text-lg">{description}</p>
        <p className="text-gray-600 mb-6">{details}</p>
        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-black">
          <p className="text-gray-700">{solution}</p>
        </div>
      </div>
    </div>
  );
}