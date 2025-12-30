import creditoArgentino from '@/assets/credito-argentino.webp';
import adt from '@/assets/adt.jpeg';
import bancoGuayaquil from '@/assets/banco-guayaquil.png';
import oncity from '@/assets/oncity.png';
import vana from '@/assets/vana.svg';

export function SocialProof() {
  const logos = [
    { name: 'Crédito Argentino', src: creditoArgentino, height: 60 },
    { name: 'ADT', src: adt, height: 50 },
    { name: 'Banco Guayaquil', src: bancoGuayaquil, height: 55 },
    { name: 'OnCity', src: oncity, height: 45 },
    { name: 'Vana', src: vana, height: 50 }
  ];

  return (
    <section className="py-16 bg-[#0A0B0F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-8 lg:gap-16 flex-wrap">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center opacity-50 hover:opacity-75 transition-opacity">
              <img 
                src={logo.src} 
                alt={logo.name}
                style={{ height: `${logo.height}px`, width: 'auto' }}
                className="object-contain max-w-[150px] brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
