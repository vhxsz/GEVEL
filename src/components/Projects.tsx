'use client';
import React, { useState, useRef, useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from 'framer-motion';
import { ArrowUpRight, Minus, Plus, Zap, Shield, Building2, Factory, Home } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const PROJECTS: Project[] = [
  {
    id: '01',
    name: 'Complexo Industrial Energia',
    category: 'Projeto Elétrico Industrial',
    description: 'Dimensionamento completo de subestação e distribuição para planta industrial de 5MW.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000&auto=format&fit=crop',
    icon: <Factory className="h-5 w-5" />,
  },
  {
    id: '02',
    name: 'Torre Corporativa Sul',
    category: 'SPDA Nível I',
    description: 'Sistema de proteção contra descargas atmosféricas para edifício de 35 andares.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    icon: <Shield className="h-5 w-5" />,
  },
  {
    id: '03',
    name: 'Condomínio Reserva Verde',
    category: 'Infraestrutura Elétrica',
    description: 'Projeto elétrico para condomínio residencial com 200 unidades e áreas comuns.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
    icon: <Home className="h-5 w-5" />,
  },
  {
    id: '04',
    name: 'Shopping Center Metropolitano',
    category: 'Média Tensão',
    description: 'Cabine primária e distribuição em média tensão para centro comercial.',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1000&auto=format&fit=crop',
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    id: '05',
    name: 'Usina Solar Fotovoltaica',
    category: 'Energia Renovável',
    description: 'Projeto de usina solar de 2MWp com conexão à rede de distribuição.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop',
    icon: <Zap className="h-5 w-5" />,
  },
];

export default function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    mouseX.set(e.clientX + 20);
    mouseY.set(e.clientY + 20);
  };

  return (
    <section
      id="projetos"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full cursor-default bg-background px-6 py-24 md:px-12"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--electric-blue)/0.05),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />

      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4 block">
              Portfólio
            </span>
            <h2 className="font-display text-4xl font-light tracking-tighter sm:text-6xl md:text-7xl">
              Projetos <span className="text-muted-foreground">Realizados</span>
            </h2>
          </div>
          <div className="h-px flex-1 bg-border mx-8 hidden md:block" />
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Selecionados
          </p>
        </motion.header>

        {/* Projects List */}
        <div className="flex flex-col">
          {PROJECTS.map((project, index) => (
            <ProjectRow
              key={project.id}
              data={project}
              index={index}
              isActive={activeId === project.id}
              setActiveId={setActiveId}
              isMobile={isMobile}
              isAnyActive={activeId !== null}
            />
          ))}
        </div>
      </div>

      {/* Desktop Floating Image */}
      {!isMobile && (
        <motion.div
          style={{ x: cursorX, y: cursorY }}
          className="pointer-events-none fixed left-0 top-0 z-50 hidden md:block"
        >
          <AnimatePresence mode="wait">
            {activeId && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative h-64 w-80 overflow-hidden rounded-xl border border-primary/20 bg-card shadow-2xl glow-electric"
              >
                <img
                  src={PROJECTS.find((t) => t.id === activeId)?.image}
                  alt="Preview"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 w-full p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {PROJECTS.find((t) => t.id === activeId)?.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}

function ProjectRow({
  data,
  index,
  isActive,
  setActiveId,
  isMobile,
  isAnyActive,
}: {
  data: Project;
  index: number;
  isActive: boolean;
  setActiveId: (id: string | null) => void;
  isMobile: boolean;
  isAnyActive: boolean;
}) {
  const isDimmed = isAnyActive && !isActive;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{
        opacity: isDimmed ? 0.3 : 1,
        backgroundColor: isActive && isMobile ? 'hsl(var(--card))' : 'transparent',
      }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => !isMobile && setActiveId(data.id)}
      onMouseLeave={() => !isMobile && setActiveId(null)}
      onClick={() => isMobile && setActiveId(isActive ? null : data.id)}
      className={`group relative border-t border-border transition-colors duration-500 last:border-b ${
        isMobile ? 'cursor-pointer' : 'cursor-default'
      }`}
    >
      <div className="relative z-10 flex flex-col py-8 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="flex items-center gap-6 md:gap-12 pl-4 md:pl-0 transition-transform duration-500 group-hover:translate-x-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-muted-foreground">{data.id}</span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
              {data.icon}
            </div>
          </div>
          <h3 className="font-display text-2xl font-medium tracking-tight text-muted-foreground transition-colors duration-300 group-hover:text-foreground md:text-4xl lg:text-5xl">
            {data.name}
          </h3>
        </div>

        <div className="mt-4 flex items-center justify-between pl-20 pr-4 md:mt-0 md:justify-end md:gap-12 md:pl-0 md:pr-0">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-primary">
            {data.category}
          </span>

          <div className="block md:hidden text-muted-foreground">
            {isActive ? <Minus size={18} /> : <Plus size={18} />}
          </div>

          <motion.div
            animate={{ x: isActive ? 0 : -10, opacity: isActive ? 1 : 0 }}
            className="hidden md:block text-primary"
          >
            <ArrowUpRight size={28} strokeWidth={1.5} />
          </motion.div>
        </div>
      </div>

      {/* Mobile Accordion */}
      <AnimatePresence>
        {isMobile && isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden bg-card"
          >
            <div className="p-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <img
                  src={data.image}
                  alt={data.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm text-muted-foreground mb-2">{data.description}</p>
                  <p className="text-xs uppercase tracking-widest text-primary">Ver Detalhes</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
