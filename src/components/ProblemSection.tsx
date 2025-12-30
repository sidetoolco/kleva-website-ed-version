import { Shield, Phone, FileText, BarChart3, CheckCircle, AlertCircle } from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="text-sm tracking-wider text-gray-500 mb-4">
              THE CHALLENGE
            </div>
            
            <h2 className="mb-6 text-4xl md:text-5xl">
              The Problem With AI
              <br />
              <span className="text-gray-400">in Lending Today</span>
            </h2>

            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Large financial institutions can absorb long implementation cycles, custom engineering, 
              and extended pilots. Most lenders cannot. For many teams, AI adoption stalls due to three persistent barriers.
            </p>

            <div className="mt-16 space-y-8">
              <ProblemItem
                number="01"
                title="Custom Builds Require Engineering Resources Most Lenders Don't Have"
                description="Traditional AI deployments require significant upfront investment in infrastructure, data preparation, model tuning, and maintenance—creating vendor dependencies and extended ROI timelines."
              />
              <ProblemItem
                number="02"
                title="Off-the-Shelf Solutions Don't Fit Lending Workflows"
                description="Most AI platforms lack pre-built workflows for FDCPA compliance, verification protocols, and negotiation parameters. Building from scratch defeats the purpose of using a platform."
              />
              <ProblemItem
                number="03"
                title="Compliance Risk Is Difficult to Validate Before Deployment"
                description="Generic platforms lack transparency and lending-specific compliance controls, making it impossible to test agents against real borrower scenarios before going live."
              />
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg shadow-2xl p-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Collections Workflow</span>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-green-500 text-white text-sm rounded">
                    Setup
                  </button>
                  <button className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">
                    Configure
                  </button>
                  <button className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">
                    Test
                  </button>
                </div>
              </div>

              {/* Workflow Steps */}
              <div className="p-6 space-y-4">
                <WorkflowStep
                  icon={<Phone className="w-4 h-4 text-blue-600" />}
                  title="Initial contact attempt"
                  time="Day 1-3"
                />
                <WorkflowStep
                  icon={<FileText className="w-4 h-4 text-red-600" />}
                  title="Send payment reminder"
                  time="Day 5"
                />
                <WorkflowStep
                  icon={<CheckCircle className="w-4 h-4 text-green-600" />}
                  title="Verify contact information"
                  time="Day 7"
                />
                <WorkflowStep
                  icon={<Phone className="w-4 h-4 text-blue-600" />}
                  title="Offer payment plan"
                  time="Day 10"
                />
                <WorkflowStep
                  icon={<AlertCircle className="w-4 h-4 text-yellow-600" />}
                  title="Escalate to specialist"
                  time="Day 15"
                />
                <WorkflowStep
                  icon={<BarChart3 className="w-4 h-4 text-purple-600" />}
                  title="Log compliance report"
                  time="Ongoing"
                />
              </div>

              {/* Configuration Panel */}
              <div className="bg-gray-50 border-t border-gray-200 p-6">
                <div className="mb-3">
                  <div className="text-sm text-gray-600 mb-2">Integration</div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-sm">AI Agent</span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="text-sm text-gray-600 mb-2">Action event</div>
                  <div className="text-sm">Payment overdue</div>
                </div>
                <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProblemItemProps {
  number: string;
  title: string;
  description: string;
}

function ProblemItem({ number, title, description }: ProblemItemProps) {
  return (
    <div className="flex gap-6 group">
      <div className="text-xl text-gray-300 flex-shrink-0 group-hover:text-gray-600 transition-colors">{number}</div>
      <div>
        <h4 className="mb-2 text-lg">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

interface WorkflowStepProps {
  icon: React.ReactNode;
  title: string;
  time: string;
}

function WorkflowStep({ icon, title, time }: WorkflowStepProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-white rounded flex items-center justify-center shadow-sm">
          {icon}
        </div>
        <span className="text-sm text-gray-700">{title}</span>
      </div>
      <div className="text-xs text-gray-500">{time}</div>
    </div>
  );
}
