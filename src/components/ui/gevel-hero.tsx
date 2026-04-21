import { useEffect, useRef, useState } from "react";
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react";
import { motion } from "framer-motion";

export default function GevelHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background relative overflow-hidden">

      {/* SVG Filters */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix type="matrix" values="1 0 0 0 0.02 0 1 0 0 0.02 0 0 1 0 0.05 0 0 0 0.9 0" result="tint" />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="gooey" />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#f97316" />
            <stop offset="70%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </svg>

      {/* Mesh Gradient — cores Gevel */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#0a0e1a", "#f97316", "#c2410c", "#0a0e1a", "#1e293b"]}
        speed={isActive ? 0.5 : 0.25}
        distortion={0.35}
        swirl={0.1}
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-40"
        colors={["#0a0e1a", "#fb923c", "#0a0e1a", "#334155"]}
        speed={0.15}
        distortion={0.2}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/55" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />

      {/* Main content — bottom-left */}
      <main className="absolute bottom-8 left-6 md:left-8 z-20 max-w-2xl">
        <div className="text-left">

          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-6 relative border border-primary/20"
            style={{ filter: "url(#glass-effect)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-full" />
            <span className="text-foreground/90 text-xs md:text-sm font-medium relative z-10 tracking-wide">
              ⚡ Engenharia Elétrica Industrial
            </span>
          </motion.div>

          {/* Título */}
          <motion.h1
            className="font-display font-bold text-foreground mb-6 leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              className="block font-light text-3xl md:text-5xl lg:text-6xl mb-2 tracking-wider"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f97316 30%, #fb923c 70%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "url(#text-glow)",
              }}
            >
              Projetos Elétricos
            </motion.span>
            <span className="block font-black text-5xl md:text-7xl lg:text-8xl text-foreground drop-shadow-2xl">
              GEVEL
            </span>
            <span className="block font-light text-xl md:text-3xl lg:text-4xl text-foreground/70 italic">
              Industriais
            </span>
          </motion.h1>

          {/* Descrição */}
          <motion.p
            className="text-sm md:text-base lg:text-lg font-light text-foreground/60 mb-8 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Soluções completas em engenharia elétrica — projetos, automação, manutenção preventiva e consultoria técnica especializada.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex items-center gap-3 md:gap-6 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.a
              href="#contato"
              className="px-6 md:px-10 py-3 md:py-4 rounded-full border-2 border-primary/40 text-foreground font-medium text-sm transition-all duration-300 hover:bg-primary/10 hover:border-primary cursor-pointer backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Orçamento
            </motion.a>
            <motion.a
              href="#servicos"
              className="px-6 md:px-10 py-3 md:py-4 rounded-full text-foreground font-semibold text-sm cursor-pointer shadow-lg glow-electric"
              style={{ background: "linear-gradient(135deg, #f97316, #fb923c)" }}
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Serviços
            </motion.a>
          </motion.div>
        </div>
      </main>

      {/* PulsingBorder — bottom-right, hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 right-8 z-30">
        <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
          <PulsingBorder
            colors={["#f97316", "#c2410c", "#fb923c", "#ffffff", "#1e293b"]}
            colorBack="#00000000"
            speed={1.5}
            roundness={1}
            thickness={0.1}
            softness={0.2}
            intensity={0.8}
            spots={5}
            spotSize={0.1}
            pulse={0.1}
            smoke={0.5}
            smokeSize={0.5}
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
          />
          {/* Texto rotativo */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transform: "scale(1.6)" }}
          >
            <defs>
              <path id="gevel-circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text fontSize="7" fill="rgba(255,255,255,0.7)" fontFamily="Space Grotesk, sans-serif">
              <textPath href="#gevel-circle" startOffset="0%">
                GEVEL • Engenharia Elétrica • Industrial • GEVEL •
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>

      {/* Stats — top-right, visível só em md+ */}
      <motion.div
        className="absolute top-1/2 right-6 md:right-10 -translate-y-1/2 z-20 hidden md:flex flex-col gap-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        {[
          { value: "19+", label: "Anos" },
          { value: "MBA", label: "Manutenção" },
          { value: "Six Sigma", label: "Green Belt" },
        ].map((stat, i) => (
          <div key={i} className="text-right border-r border-primary/30 pr-3">
            <div className="font-display text-xl font-bold text-gradient-electric">{stat.value}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </motion.div>

    </d