import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Features } from './components/Features';
import { Navigation } from './components/Navigation';
import { ReliabilitySection } from './components/ReliabilitySection';
import { BeyondSavings } from './components/BeyondSavings';
import { Footer } from './components/Footer';
import { HowItWorks } from './components/HowItWorks';
import { ProblemSection } from './components/ProblemSection';
import { StatsSection } from './components/StatsSection';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <SocialProof />
      <ProblemSection />
      <Features />
      <HowItWorks />
      <StatsSection />
      <ReliabilitySection />
      <BeyondSavings />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}