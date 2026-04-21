import GevelHero from '@/components/ui/gevel-hero';
import { CardStack, CardStackItem } from '@/components/ui/card-stack';
import Header from '@/components/Header';
import { Footer } from '@/components/ui/footer-section';
import { useWindowSize } from '@/hooks/use-mobile';

const servicesItems: CardStackItem[] = [
  {
    id: 1,
    title: "Projetos Elétricos Industriais",
    description: "Desenvolvimento completo de projetos elétricos para indústrias",
    imageSrc: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Automação e Controle",
    description: "Sistemas de automação industrial e controle de processos",
    imageSrc: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Manutenção Preventiva",
    description: "Planejamento e execução de manutenção preventiva e preditiva",
    imageSrc: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Consultoria Técnica",
    description: "Consultoria especializada em engenharia elétrica industrial",
    imageSrc: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Sistemas de Proteção",
    description: "Implementação de sistemas SPDA e proteção contra descargas",
    imageSrc: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
  },
];

const Gevel = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero */}
      <div id="sobre">
        <GevelHero />
      </div>

      {/* Serviços */}
      <section id="servicos" className="relative w-full bg-background py-32 px-4 md:py-40 md:px-12 overflow-hidden">
        {/* Fade top */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay" />

        {/* Decoração laranja — arco superior */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-primary/10" />
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full border border-primary/15" />
        {/* Glow central */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-48 bg-primary/8 blur-[80px] rounded-full" />
        {/* Linha horizontal laranja */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        {/* Texto decorativo grande */}
        <div className="pointer-events-none absolute bottom-4 right-0 font-display font-black text-[8rem] md:text-[14rem] leading-none text-primary/[0.04] select-none tracking-tighter">
          GEVEL
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-3 block">
              Nossos Serviços
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-light tracking-tighter">
              Expertise <span className="text-gradient-electric">Técnica</span>
            </h2>
          </div>
          <CardStack
            items={servicesItems}
            initialIndex={0}
            autoAdvance
            intervalMs={3000}
            pauseOnHover
            showDots
            className="max-w-4xl mx-auto"
            cardWidth={isMobile ? Math.min(width - 120, 220) : 520}
            cardHeight={isMobile ? 150 : 320}
            maxVisible={isMobile ? 5 : 7}
            spreadDeg={isMobile ? 36 : 48}
          />
        </div>
      </section>

      {/* Engenheiro */}
      <section className="relative w-full bg-background py-32 px-6 md:py-40 md:px-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--electric-blue)/0.1),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />

        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Imagem — mobile: topo centralizado, desktop: lado direito */}
            <div className="relative lg:hidden flex justify-center">
              <div className="relative h-[220px] w-[180px]">
                <div className="absolute -inset-2 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent" />
                <div className="absolute inset-0 rounded-xl border border-border bg-card overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                    alt="Engenheiro Gelber Amaral"
                    className="h-full w-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-muted-foreground">Disponível</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                  Responsável Técnico
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
                <span className="text-foreground">Gelber</span>{' '}
                <span className="text-gradient-electric">Amaral</span>
              </h2>

              <p className="max-w-xl text-muted-foreground leading-relaxed mb-6">
                Engenheiro de Manutenção Sênior com <strong className="text-foreground">19 anos de experiência</strong> em
                ambientes industriais e <strong className="text-foreground">Six Sigma Green Belt</strong>.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="/gelber"
                  className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground glow-electric"
                >
                  Ver Perfil Completo
                </a>
                <a
                  href="https://www.linkedin.com/in/gelber-amaral-2bb5a550/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
                >
                  LinkedIn
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '19+', label: 'Anos' },
                  { value: 'MBA', label: 'Manutenção' },
                  { value: 'Six Sigma', label: 'Green Belt' },
                ].map((stat, index) => (
                  <div key={index} className="border-l border-border pl-3">
                    <div className="font-display text-2xl font-bold text-gradient-electric">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:flex">
              <div className="relative h-[300px] w-[250px]">
                <div className="absolute -inset-2 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent" />
                <div className="absolute inset-0 rounded-xl border border-border bg-card overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                    alt="Engenheiro Gelber Amaral"
                    className="h-full w-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-muted-foreground">Disponível</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="relative w-full bg-background py-32 px-6 md:py-40 md:px-12 overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--electric-blue)/0.08),transparent_60%)]" />

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4 block">
            Fale Conosco
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter mb-4">
            Vamos fazer seu <span className="text-gradient-electric">projeto</span> acontecer
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-10 max-w-xl mx-auto">
            Entre em contato para discutir seu projeto elétrico industrial. Respondemos em até 24 horas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:gelberamaral@gmail.com?subject=Solicita%C3%A7%C3%A3o%20de%20Or%C3%A7amento%20-%20GEVEL&body=Ol%C3%A1%20Gelber%2C%0A%0AGostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%3A%0A%0A"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-primary/10 px-8 py-4 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground glow-electric"
            >
              Enviar E-mail
            </a>
            <a
              href="https://wa.me/5521967075858?text=Ol%C3%A1%20Gelber%2C%20vim%20pelo%20site%20da%20GEVEL%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gevel;
