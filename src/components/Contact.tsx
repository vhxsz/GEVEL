import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';
import { sendToTelegram } from '@/lib/telegram';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await sendToTelegram(formState);
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contato" className="relative w-full bg-card py-24 px-6 md:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--electric-blue)/0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay" />
      
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4 block">
                Contato
              </span>
              <h2 className="font-display text-4xl font-light tracking-tighter sm:text-6xl mb-6">
                Vamos <span className="text-gradient-electric">Conversar</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-12">
                Estou disponível para novos projetos e consultorias. Entre em contato para discutirmos como posso ajudar no seu próximo empreendimento.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <a
                href="mailto:gelberamaral@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-border bg-background p-4 transition-all hover:border-primary/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">gelberamaral@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+5521967075858"
                className="group flex items-center gap-4 rounded-xl border border-border bg-background p-4 transition-all hover:border-primary/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Telefone</p>
                  <p className="font-medium text-foreground">(21) 96707-5858</p>
                </div>
              </a>

              <div className="group flex items-center gap-4 rounded-xl border border-border bg-background p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Localização</p>
                  <p className="font-medium text-foreground">Nova Iguaçu, Brasil</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
            <a
              href="https://www.linkedin.com/in/gelber-amaral-2bb5a550/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-lg"
            >
              <Linkedin className="h-5 w-5" />
            </a>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Descreva seu projeto ou necessidade..."
                />
              </div>

              {status === 'success' && (
                <p className="text-sm text-green-400 text-center">✅ Mensagem enviada com sucesso!</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400 text-center">❌ Erro ao enviar. Tente novamente.</p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 glow-electric disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
