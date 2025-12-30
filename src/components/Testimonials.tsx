import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Kleva's compliance-first AI allows our collections team to focus on high-value interactions while maintaining perfect regulatory adherence. We believe technology enhances our capabilities, but the human touch is irreplaceable. Kleva helps us deliver on both.",
      name: "Sarah Martinez",
      title: "VP of Collections | Regional Credit Union",
    },
    {
      quote: "We've completed over 50,000 AI-driven collections calls with Kleva. Our recovery rates improved 25% while reducing compliance incidents to zero. The platform freed up our team for more meaningful work.",
      name: "James Chen",
      title: "Head of Loss Mitigation | Auto Finance Group",
    },
    {
      quote: "Implementation took weeks, not months. Kleva understood our regulatory environment from day one. The AI agents handle routine collections while our specialists focus on complex hardship cases.",
      name: "Patricia Williams",
      title: "Chief Risk Officer | Community Bank",
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="text-sm tracking-wider text-gray-500 mb-4 uppercase">Success Stories</div>
            <h2 className="text-4xl md:text-5xl">
              Trusted by lenders
              <br />
              <span className="text-gray-400">across the country</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {[testimonials[currentIndex], testimonials[(currentIndex + 1) % testimonials.length]].map((testimonial, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 border border-gray-200 hover:shadow-xl transition-shadow">
              <blockquote className="mb-8 text-lg md:text-xl text-gray-700 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-white">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-lg">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 rounded-full transition-all ${
                idx === currentIndex ? 'w-8 bg-black' : 'w-1 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}