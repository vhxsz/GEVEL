import { motion } from 'framer-motion';
import { Zap, ArrowDown, Mail, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--electric-blue)/0.1),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--electric-cyan)/0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
      
      {/* Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} 
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Engenheiro Eletricista
              </span>
            </motion.div>

            {/* Mobile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:hidden mb-8 mx-auto w-full max-w-[420px] h-[380px]"
            >
              <div className="absolute -inset-2 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="absolute inset-0 rounded-xl border border-border bg-card overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop"
                  alt="Engenharia Elétrica"
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Disponível</span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
            >
              <span className="text-foreground">Gelber</span>
              <br />
              <span className="text-gradient-electric">Lucio</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              Especialista em <strong className="text-foreground">projetos elétricos</strong>, 
              sistemas de <strong className="text-foreground">SPDA</strong> e soluções energéticas 
              de alta performance. Transformando desafios técnicos em projetos seguros e eficientes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground glow-electric"
              >
                Ver Projetos
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                Contato
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 grid grid-cols-3 gap-8"
            >
              {[
                { value: '10+', label: 'Anos de Experiência' },
                { value: '150+', label: 'Projetos Executados' },
                { value: '50+', label: 'Clientes Satisfeitos' },
              ].map((stat, index) => (
                <div key={index} className="border-l border-border pl-4">
                  <div className="font-display text-3xl font-bold text-gradient-electric">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[500px] w-[400px]">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="absolute inset-0 rounded-2xl border border-border bg-card overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop"
                  alt="Engenharia Elétrica"
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse-glow" />
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      Disponível para projetos
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <a href="https://www.linkedin.com/in/gelber-amaral-2bb5a550/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur transition-colors hover:border-primary hover:text-primary">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur transition-colors hover:border-primary hover:text-primary">
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-20 rounded-xl border border-primary/30 bg-card p-4 shadow-lg glow-electric"
              >
                <Zap className="h-6 w-6 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
