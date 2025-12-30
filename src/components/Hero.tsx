import { MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjcwOTI2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Modern office building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-white mb-6 text-5xl md:text-7xl leading-tight">
          Intelligence that runs
          <br />
          your collections
        </h1>

        <p className="text-white/90 max-w-2xl mx-auto mb-12 text-lg md:text-xl">
          Kleva automates collections and total-loss mitigation with compliance-first AI 
          that fits how lenders are supervised and examined.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
            Book a demo
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/30">
            Watch overview
          </button>
        </div>
      </div>

      {/* Talk to Kleva Button */}
      <button className="fixed bottom-6 right-6 z-50 bg-white text-black px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group">
        <MessageCircle className="w-5 h-5 text-green-600" />
        <span>Talk to Kleva</span>
      </button>
    </section>
  );
}