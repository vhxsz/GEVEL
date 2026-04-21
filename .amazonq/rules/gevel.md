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
2. `#sobre` → `<GevelHero />` — hero com MeshGradient animado + PulsingBorder (hidden mobile)
3. `#servicos` → CardStack animado com 5 serviços (auto-advance 3s) + decorações laranja
4. Seção do engenheiro — bio + stats + foto + links
5. `#contato` — CTA com e-mail e WhatsApp
6. `<Footer />` — links de navegação + redes sociais

### Página Gelber (`/gelber`) — `src/pages/Index.tsx`
Portfólio pessoal com:
- `<Hero />` — apresentação pessoal com imagem mobile visível (420×380), stats (10+ anos, 150+ projetos, 50+ clientes)
- `<Projects />` — lista interativa com hover/floating image preview
- `<Services />` — grid 3 colunas com 6 serviços
- `<Experience />`, `<Contact />`, `<Footer />`

### Componentes Principais
- **`Header`** (`src/components/Header.tsx`):
  - Detecta rota atual, alterna navLinks entre GEVEL e Gelber
  - CTA "Solicitar Orçamento" na rota `/`
  - Logo `h-20` sem texto "GEVEL."
  - **Mobile:** botão hambúrguer animado (3 linhas → X com spring) no canto direito
  - **Menu mobile:** painel glassmorphism flutuante `right-4 top-4`, `w-72`, `backdrop-blur-2xl`, com backdrop escuro clicável, links com stagger e CTA laranja
- **`GevelHero`** (`src/components/ui/gevel-hero.tsx`):
  - MeshGradient + PulsingBorder (hidden mobile com `hidden md:block`)
  - Texto animado bottom-left + stats top-right (hidden mobile)
  - Gradiente de fade `from-card to-transparent h-40` na base para transição suave
- **`FullScreenScrollFX`** (`src/components/ui/full-screen-scroll-fx.tsx`): scroll fullscreen com GSAP ScrollTrigger
- **`CardStack`** (`src/components/ui/card-stack.tsx`): carrossel empilhado com auto-advance
  - Mobile: `cardWidth=Math.min(width-120, 220)`, `cardHeight=150`, `maxVisible=5`, `spreadDeg=36`
  - Desktop: `cardWidth=520`, `cardHeight=320`
- **`Footer`** (`src/components/ui/footer-section.tsx`): 4 colunas + glow laranja atrás no mobile (`z-index:-1`)

## Decorações Visuais — Section "Expertise Técnica" (`#servicos`)
- Dois arcos concêntricos laranja no topo (`border-primary/10` e `/15`)
- Glow difuso laranja central (`blur-[80px]`, `bg-primary/8`)
- Linha fina laranja no topo (`via-primary/40`)
- Texto "GEVEL" gigante marca d'água no canto inferior direito (`text-primary/[0.04]`, `text-[14rem]`)

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
- **E-mail Gelber:** `gelberamaral@gmail.com`
- **Telefone Gelber:** `(21) 96707-5858` / `tel:+5521967075858`
- **Localização Gelber:** Nova Iguaçu, Brasil
- **E-mail GEVEL:** `contato@gevel.com.br`
- **WhatsApp GEVEL:** `https://wa.me/5500000000000` (placeholder — atualizar)
- **LinkedIn:** `https://www.linkedin.com/in/gelber-amaral-2bb5a550/`

## Favicon
- Arquivo: `/favicon.png` (definido em `index.html`)

## Convenções de Código
- Componentes em PascalCase, arquivos `.tsx`
- Imports com alias `@/` (mapeado para `src/`)
- Animações de entrada: `initial={{ opacity: 0, y: 20/30 }}` + `whileInView` com `viewport={{ once: true }}`
- Seções com `id` em português minúsculo: `#sobre`, `#servicos`, `#projetos`, `#contato`
- Imagens via Unsplash (URLs diretas) — substituir por assets reais em produção
- Sem modo claro — não adicionar toggle de tema
- `overflow-x: hidden` em `html` e `body` (index.css) + containers principais

## Fixes Mobile Aplicados
- Scroll horizontal corrigido: `overflow-x-hidden` no html/body/containers
- Section serviços com `overflow-hidden` para conter CardStack
- Imagem do eletricista visível no mobile em `Hero.tsx` (`max-w-[420px] h-[380px]`)
- PulsingBorder + texto rotativo ocultos no mobile (`hidden md:block`)
- CardStack menor no mobile para bordas arredondadas visíveis
