# Contexto do Projeto — GEVEL Engenharia Elétrica

## Visão Geral
Site institucional/portfólio da **GEVEL**, empresa de engenharia elétrica industrial liderada pelo **Eng. Gelber Amaral** (19+ anos de experiência, MBA em Manutenção, Six Sigma Green Belt, LinkedIn: gelber-amaral-2bb5a550).

## Stack Técnica
- **Framework:** React 18 + TypeScript + Vite
- **Roteamento:** React Router DOM v6
- **Estilização:** Tailwind CSS v3 + shadcn/ui (Radix UI)
- **Animações:** Framer Motion, GSAP + ScrollTrigger, `@paper-design/shaders-react`
- **Estado/Data:** TanStack Query
- **Fontes:** Inter (corpo), Space Grotesk (títulos/display)

## Rotas
| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | `Gevel.tsx` | Página principal da empresa GEVEL |
| `/gelber` | `Index.tsx` | Portfólio pessoal do Eng. Gelber |
| `*` | `NotFound.tsx` | 404 |

## Design System / Tema
- **Tema:** Dark exclusivo (sem toggle light/dark)
- **Cor primária:** Laranja elétrico — `hsl(25 95% 53%)` / `#f97316`
- **Background:** `hsl(220 20% 4%)` (quase preto azulado)
- **Card:** `hsl(220 20% 6%)`
- **Tokens customizados:** `--electric-blue`, `--electric-cyan`, `--electric-glow`
- **Gradiente:** `text-gradient-electric` (laranja → âmbar)
- **Utilitários:** `.glow-electric`, `.bg-noise`, `.line-decoration`, `.animate-glow`

## Estrutura de Componentes

### Página GEVEL (`/`) — `src/pages/Gevel.tsx`
Seções em ordem:
1. `<Header />` — fixo, transparente → blur ao scroll
2. `#sobre` → `<GevelHero />` — hero com MeshGradient animado + PulsingBorder
3. `#servicos` → CardStack animado com 5 serviços (auto-advance 3s)
4. Seção do engenheiro — bio + stats + foto + links
5. `#contato` — CTA com e-mail e WhatsApp
6. `<Footer />` — links de navegação + redes sociais

### Página Gelber (`/gelber`) — `src/pages/Index.tsx`
Portfólio pessoal com:
- `<Hero />` — apresentação pessoal com stats (10+ anos, 150+ projetos, 50+ clientes)
- `<Projects />` — lista interativa com hover/floating image preview
- `<Services />` — grid 3 colunas com 6 serviços
- `<Experience />`, `<Contact />`, `<Footer />`

### Componentes Principais
- **`Header`** (`src/components/Header.tsx`): detecta rota atual, alterna navLinks entre GEVEL e Gelber, CTA "Solicitar Orçamento" na rota `/`
- **`GevelHero`** (`src/components/ui/gevel-hero.tsx`): MeshGradient + PulsingBorder + texto animado bottom-left + stats top-right
- **`FullScreenScrollFX`** (`src/components/ui/full-screen-scroll-fx.tsx`): componente de scroll fullscreen com GSAP ScrollTrigger, suporta labels esquerda/direita, transição fade/wipe
- **`CardStack`** (`src/components/ui/card-stack.tsx`): carrossel empilhado com auto-advance
- **`Footer`** (`src/components/ui/footer-section.tsx`): 4 colunas (Serviços, Empresa, Recursos, Redes Sociais)

## Serviços da GEVEL
1. Projetos Elétricos Industriais
2. Automação e Controle
3. Manutenção Preventiva
4. Consultoria Técnica
5. Sistemas de Proteção (SPDA)

## Serviços do Portfólio Gelber
1. Projetos Elétricos (residencial/comercial/industrial)
2. SPDA — NBR 5419
3. Média Tensão / Subestações
4. Energia Solar (fotovoltaico on/off-grid)
5. Infraestrutura (cabeamento, CFTV, automação predial)
6. Laudos Técnicos

## Projetos em Destaque
| ID | Nome | Categoria |
|----|------|-----------|
| 01 | Complexo Industrial Energia | Projeto Elétrico Industrial |
| 02 | Torre Corporativa Sul | SPDA Nível I |
| 03 | Condomínio Reserva Verde | Infraestrutura Elétrica |
| 04 | Shopping Center Metropolitano | Média Tensão |
| 05 | Usina Solar Fotovoltaica | Energia Renovável |

## Contato / Links
- E-mail: `contato@gevel.com.br`
- WhatsApp: `https://wa.me/5500000000000` (placeholder — atualizar)
- LinkedIn: `https://www.linkedin.com/in/gelber-amaral-2bb5a550/`

## Convenções de Código
- Componentes em PascalCase, arquivos `.tsx`
- Imports com alias `@/` (mapeado para `src/`)
- Animações de entrada: `initial={{ opacity: 0, y: 20/30 }}` + `whileInView` com `viewport={{ once: true }}`
- Seções com `id` em português minúsculo: `#sobre`, `#servicos`, `#projetos`, `#contato`
- Imagens via Unsplash (URLs diretas) — substituir por assets reais em produção
- Sem modo claro — não adicionar toggle de tema
