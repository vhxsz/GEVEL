import { motion } from 'framer-motion';
import { Zap, Shield, Building2, Sun, Cable, FileCheck } from 'lucide-react';

const services = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Projetos Elétricos',
    description: 'Dimensionamento completo de instalações elétricas residenciais, comerciais e industriais. Cálculos de demanda, quadros e distribuição.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'SPDA',
    description: 'Sistemas de Proteção contra Descargas Atmosféricas. Projeto, laudos e adequação às normas NBR 5419.',
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: 'Média Tensão',
    description: 'Projetos de subestações e cabines primárias. Adequação às normas das concessionárias.',
  },
  {
    icon: <Sun className="h-6 w-6" />,
    title: 'Energia Solar',
    description: 'Dimensionamento de sistemas fotovoltaicos on-grid e off-grid. Projeto de usinas e conexão à rede.',
  },
  {
    icon: <Cable className="h-6 w-6" />,
    title: 'Infraestrutura',
    description: 'Projetos de cabeamento estruturado, CFTV, automação predial e sistemas de segurança.',
  },
  {
    icon: <FileCheck className="h-6 w-6" />,
    title: 'Laudos Técnicos',
    description: 'Laudos de instalações elétricas, SPDA e eficiência energética. Atestados de conformidade.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative w-full bg-background py-24 px-6 md:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--electric-blue)/0.08),transparent_50%)]" />
      
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4 block">
            Especialidades
          </span>
          <h2 className="font-display text-4xl font-light tracking-tighter sm:text-6xl">
            Serviços <span className="text-muted-foreground">Oferecidos</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
            Soluções completas em engenharia elétrica com foco em qualidade, segurança e conformidade com as normas técnicas vigentes.
          </p>
        </motion.header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              {/* Glow Effect */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent" />
              </div>
              
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-primary">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
