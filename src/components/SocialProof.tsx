export function SocialProof() {
  const companies = ['Clay', 'Coda', 'ConsenSys', 'Culture Amp', 'LaunchDarkly'];

  return (
    <section className="py-16 bg-[#0A0B0F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-8 lg:gap-12 flex-wrap">
          {companies.map((company) => (
            <div key={company} className="flex items-center justify-center opacity-40 hover:opacity-60 transition-opacity">
              <span className="text-white text-lg lg:text-xl font-medium tracking-wide">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
