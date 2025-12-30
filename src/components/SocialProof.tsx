export function SocialProof() {
  return (
    <section className="py-12 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-8 lg:gap-12 flex-wrap">
          {/* Left text */}
          <div className="flex-shrink-0">
            <p className="text-sm text-gray-600 max-w-[200px]">
              Trusted by banks, credit unions, auto lenders, and fintechs across the US:
            </p>
          </div>
          
          {/* Logo Grid */}
          <div className="flex items-center gap-8 lg:gap-12 flex-wrap flex-1">
            <LogoBox name="Wells Fargo" />
            <LogoBox name="Chase" />
            <LogoBox name="Capital One" />
            <LogoBox name="Ally Financial" />
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoBox({ name }: { name: string }) {
  return (
    <div className="text-xl font-medium text-gray-400 hover:text-gray-600 transition-colors">
      {name}
    </div>
  );
}
