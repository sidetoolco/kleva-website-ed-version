import { Shield, Phone, FileText, BarChart3, CheckCircle, AlertCircle } from 'lucide-react';

export function Features() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="text-sm tracking-wider text-gray-500 mb-4">
              BUILD COMPLIANT WORKFLOWS
            </div>
            
            <h2 className="mb-6 text-4xl md:text-5xl">
              AI agents that
              <br />
              <span className="text-gray-400">collect responsibly</span>
            </h2>

            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Build fully custom AI agents that handle collections and loss mitigation 
              across the organization while maintaining regulatory compliance.
            </p>

            <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors shadow-lg">
              Explore Kleva AI
            </button>

            <div className="mt-16 space-y-8">
              <FeatureItem
                number="01"
                title="Regulatory compliance built-in"
                description="Every interaction follows FDCPA, TCPA, and state-specific regulations automatically."
              />
              <FeatureItem
                number="02"
                title="Integration into any system"
                description="Connect seamlessly with your existing loan servicing platforms and CRMs."
              />
              <FeatureItem
                number="03"
                title="Intelligent escalation and routing"
                description="AI determines when to escalate to human agents based on complexity and risk."
              />
              <FeatureItem
                number="04"
                title="Complete audit trail"
                description="Every decision and interaction is logged for regulatory examination."
              />
              <FeatureItem
                number="05"
                title="Multi-channel communication"
                description="Reach borrowers through phone, email, SMS, and chat with consistent messaging."
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

interface FeatureItemProps {
  number: string;
  title: string;
  description: string;
}

function FeatureItem({ number, title, description }: FeatureItemProps) {
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