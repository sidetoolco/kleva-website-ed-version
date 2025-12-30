import { Shield, Network, FileCheck, MessageSquare, Workflow } from 'lucide-react';
import workforceImage from 'figma:asset/201d6b5943fb46fc734a54d004cf9882e445178e.png';

export function Features() {
  return (
    <section className="py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="text-sm tracking-wider text-gray-500 mb-4">
              BUILD COMPLIANT WORKFLOWS
            </div>
            
            <h2 className="mb-6 text-4xl md:text-6xl">
              AI agents that
              <br />
              <span className="text-gray-400">collect responsibly</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-10">
              <FeatureItem
                icon={<Shield className="w-5 h-5" />}
                title="Regulatory compliance built-in"
                description="Every interaction follows FDCPA, TCPA, and state-specific regulations automatically."
              />
              <FeatureItem
                icon={<Network className="w-5 h-5" />}
                title="Integration into any system"
                description="Connect seamlessly with your existing loan servicing platforms and CRMs."
              />
              <FeatureItem
                icon={<Workflow className="w-5 h-5" />}
                title="Intelligent escalation and routing"
                description="AI determines when to escalate to human agents based on complexity and risk."
              />
              <FeatureItem
                icon={<FileCheck className="w-5 h-5" />}
                title="Complete audit trail"
                description="Every decision and interaction is logged for regulatory examination."
              />
              <FeatureItem
                icon={<MessageSquare className="w-5 h-5" />}
                title="Multi-channel communication"
                description="Reach borrowers through phone, email, SMS, and chat with consistent messaging."
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={workforceImage}
              alt="Kleva AI collections interface"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex flex-col group">
      <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 group-hover:shadow-md transition-shadow">
        {icon}
      </div>
      <h4 className="mb-3 text-lg">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
