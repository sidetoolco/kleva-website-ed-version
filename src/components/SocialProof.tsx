export function SocialProof() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs tracking-widest text-gray-400 uppercase font-medium">
            Trusted by leading financial institutions
          </p>
        </div>
        
        {/* Logo Grid */}
        <div className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap">
          <LogoBox name="Wells Fargo" />
          <LogoBox name="Chase" />
          <LogoBox name="Capital One" />
          <LogoBox name="Ally Financial" />
        </div>
      </div>
    </section>
  );
}

function LogoBox({ name }: { name: string }) {
  return (
    <div className="group relative">
      <div className="px-8 py-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all">
        <span className="text-lg font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
          {name}
        </span>
      </div>
    </div>
  );
}
