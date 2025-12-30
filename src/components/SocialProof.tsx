export function SocialProof() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm tracking-wider text-gray-500 uppercase">
            Trusted by banks, credit unions, auto lenders, and fintechs
          </p>
        </div>
        
        {/* Logo Grid */}
        <div className="flex items-center justify-center gap-12 lg:gap-16 flex-wrap">
          <div className="text-2xl font-medium text-gray-400 hover:text-gray-600 transition-colors">
            Wells Fargo
          </div>
          <div className="text-2xl font-medium text-gray-400 hover:text-gray-600 transition-colors">
            Chase
          </div>
          <div className="text-2xl font-medium text-gray-400 hover:text-gray-600 transition-colors">
            Capital One
          </div>
          <div className="text-2xl font-medium text-gray-400 hover:text-gray-600 transition-colors">
            Ally Financial
          </div>
        </div>
      </div>
    </section>
  );
}
