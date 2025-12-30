import { Database, Zap, Monitor, Eye } from 'lucide-react';
import workforceImage from 'figma:asset/201d6b5943fb46fc734a54d004cf9882e445178e.png';

export function WorkforceManagement() {
  return (
    <section className="py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="text-sm tracking-wider text-gray-500 mb-6">
              MANAGE YOUR WORKFORCE
            </div>
            
            <h2 className="mb-12 text-4xl md:text-6xl">
              Access information
              <br />
              <span className="text-gray-400">and deploy your</span>
              <br />
              AI team
            </h2>

            <div className="grid sm:grid-cols-2 gap-10">
              <FeatureItem
                icon={<Database className="w-5 h-5" />}
                title="Remove data silos"
                description="Access information from every system in one place and in natural language."
              />
              <FeatureItem
                icon={<Monitor className="w-5 h-5" />}
                title="Deploy your workforce"
                description="Make decisions and deploy your AI workforce to execute with a simple command."
              />
              <FeatureItem
                icon={<Zap className="w-5 h-5" />}
                title="Iterate on operating procedures"
                description="Implement new procedures or logic with no wait time, no training, and measure the results."
              />
              <FeatureItem
                icon={<Eye className="w-5 h-5" />}
                title="View from the control tower"
                description="Integrate into your own UI or leverage Kleva's tailored control tower view."
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={workforceImage}
              alt="Kleva AI workforce management interface"
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