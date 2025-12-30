export function SocialProof() {
  const logos = [
    {
      name: 'Clay',
      src: 'https://www.clay.com/logo.svg',
      width: 80
    },
    {
      name: 'Coda',
      src: 'https://coda.io/static/logos/coda-logo.svg',
      width: 90
    },
    {
      name: 'ConsenSys',
      src: 'https://consensys.io/static/logo.svg',
      width: 140
    },
    {
      name: 'Culture Amp',
      src: 'https://www.cultureamp.com/hubfs/culture-amp-logo.svg',
      width: 140
    },
    {
      name: 'LaunchDarkly',
      src: 'https://launchdarkly.com/static/images/logo.svg',
      width: 140
    }
  ];

  return (
    <section className="py-16 bg-[#0A0B0F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-12 flex-wrap">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center opacity-50 hover:opacity-75 transition-opacity grayscale">
              <img 
                src={logo.src} 
                alt={logo.name}
                style={{ width: `${logo.width}px`, height: 'auto', filter: 'brightness(0) invert(1)' }}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
