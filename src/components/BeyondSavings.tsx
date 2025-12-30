import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BeyondSavings() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="text-sm tracking-wider text-gray-500 mb-6">
            GO ABOVE AND BEYOND
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <h2 className="text-4xl md:text-5xl">
              Beyond savings
              <br />
              <span className="text-gray-400">— a new world of</span>
              <br />
              possibility
            </h2>
            <div className="flex flex-col items-start">
              <p className="text-gray-600 mb-6">
                AI workers do more than cut costs. They allow you to move faster, act smarter, & do more.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors">
                Start a Pilot
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-end gap-4 mb-8">
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Image */}
        <div className="rounded-lg overflow-hidden shadow-2xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGZ1dHVyaXN0aWMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTczNTU2ODg1MXww&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Futuristic AI technology visualization"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <UseCaseCard
            title="Early intervention"
            description="Identify at-risk accounts before they become delinquent with predictive analytics and proactive outreach."
          />
          <UseCaseCard
            title="Payment plan optimization"
            description="AI analyzes borrower situations and suggests optimal payment plans that maximize recovery while maintaining compliance."
          />
          <UseCaseCard
            title="Skip tracing automation"
            description="Automatically locate borrowers using multiple data sources while maintaining FCRA compliance."
          />
        </div>
      </div>
    </section>
  );
}

interface UseCaseCardProps {
  title: string;
  description: string;
}

function UseCaseCard({ title, description }: UseCaseCardProps) {
  return (
    <div className="p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
      <h4 className="mb-4 text-lg">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}