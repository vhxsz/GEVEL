import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Engenheiro de Manutenção Sênior',
    company: 'Braskem',
    period: 'Dez 2020 - Presente · 5 anos 2 meses',
    description: 'Gestão de equipe de manutenção, planejamento de grandes manutenções, gestão de CAPEX e OPEX utilizando SAP_PM. Análise de causa raiz com ferramentas Six Sigma.',
  },
  {
    type: 'work',
    title: 'Supervisor de Manutenção Elétrica',
    company: 'Ball Corporation',
    period: 'Ago 2020 - Dez 2020 · 5 meses',
    description: 'Supervisão de manutenção elétrica em ambiente industrial.',
  },
  {
    type: 'work',
    title: 'Engenheiro Eletricista',
    company: 'Air Liquide Brasil',
    period: 'Set 2017 - Ago 2020 · 3 anos',
    description: 'Responsável pela equipe de manutenção elétrica, instrumentação e automação. Gestão do MAXIMO, controle de KPIs e planejamento de paradas de manutenção.',
  },
  {
    type: 'work',
    title: 'Engenheiro',
    company: 'Tecnobre Comércio e Representações',
    period: 'Fev 2015 - Set 2017 · 2 anos 8 meses',
    description: 'Responsável técnico da empresa. Projetos de painéis de força e controle, automação, correção de fator de potência. Gestão de oficinas de manutenção.',
  },
  {
    type: 'work',
    title: 'Supervisor de Operações',
    company: 'Linde Gas',
    period: 'Ago 2009 - Fev 2015 · 5 anos 7 meses',
    description: 'Supervisão de produção e manutenção em plantas de gases industriais. Coordenação de grandes manutenções e implantação do sistema SAP_PM.',
  },
  {
    type: 'work',
    title: 'Técnico Instrumentista',
    company: 'Linde Gas',
    period: 'Ago 2006 - Out 2009 · 3 anos 3 meses',
    description: 'Execução da manutenção elétrica, instrumentação e automação. Automação e integração de plantas com Centro de Operações Remota.',
  },
];

const education = [
  {
    type: 'education',
    title: 'MBA em Engenharia de Manutenção',
    company: 'Universidade Federal do Rio de Janeiro (UFRJ)',
    period: 'Pós-graduação',
  },
  {
    type: 'education',
    title: 'Engenharia Elétrica',
    company: 'Universidade Federal do Rio de Janeiro (UFRJ)',
    period: 'Graduação',
  },
];

const certifications = [
  'Six Sigma - Green Belt',
  'SAP_PM - Gestão de Manutenção',
  'MAXIMO - Sistema de Manutenção',
  'ISO 9001:2008 - Auditor Interno',
  'ABNT NBR IEC 60079:2014 - Atmosferas Explosivas',
  'Manutenção Centrada em Confiabilidade (RCM)',
];

export default function Experience() {
  return (
    <section id="experiencia" className="relative w-full bg-card py-24 px-6 md:px-12">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay" />
      
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4 block">
            Trajetória
          </span>
          <h2 className="font-display text-4xl font-light tracking-tighter sm:text-6xl">
            Experiência <span className="text-muted-foreground">Profissional</span>
          </h2>
        </motion.header>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-medium">Carreira</h3>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l border-border hover:border-primary/50 transition-colors"
                >
                  <div className="absolute left-0 top-0 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">{exp.period}</span>
                  <h4 className="mt-2 font-display text-lg font-medium text-foreground">{exp.title}</h4>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-medium">Formação</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 border-l border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="absolute left-0 top-0 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                    <span className="text-xs font-medium uppercase tracking-wider text-primary">{edu.period}</span>
                    <h4 className="mt-2 font-display text-lg font-medium text-foreground">{edu.title}</h4>
                    <p className="text-sm text-muted-foreground">{edu.company}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-medium">Certificações</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {cert}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
