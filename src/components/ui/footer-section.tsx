'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FacebookIcon, FrameIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Serviços',
		links: [
			{ title: 'Elétricos', href: '#eletricos' },
			{ title: 'Industrial', href: '#industrial' },
			{ title: 'Preventiva', href: '#preventiva' },
			{ title: 'Consultoria', href: '#consultoria' },
		],
	},
	{
		label: 'Empresa',
		links: [
			{ title: 'Sobre Nós', href: '#sobre' },
			{ title: 'Engenheiro', href: '#engenheiro' },
			{ title: 'Contato', href: '#contato' },
			{ title: 'Orçamento', href: '#orcamento' },
		],
	},
	{
		label: 'Recursos',
		links: [
			{ title: 'Projetos', href: '#projetos' },
			{ title: 'Certificações', href: '#certificacoes' },
			{ title: 'Experiência', href: '#experiencia' },
			{ title: 'Suporte', href: '#suporte' },
		],
	},
	{
		label: 'Redes Sociais',
		links: [
			{ title: 'Facebook', href: '#', icon: FacebookIcon },
			{ title: 'Instagram', href: '#', icon: InstagramIcon },
			{ title: 'Youtube', href: '#', icon: YoutubeIcon },
			{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
		],
	},
];

export function Footer() {
	return (
		<footer className="relative w-full flex flex-col items-center justify-center rounded-t-[2rem] md:rounded-t-[3rem] border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] md:bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16" style={{boxShadow: undefined}}>
			<div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-20 w-2/3 rounded-full bg-primary/25 blur-3xl md:hidden" style={{zIndex: -1}} />
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full max-w-6xl mx-auto gap-8 xl:grid-cols-3 xl:gap-8">
				<AnimatedContainer className="space-y-4">
					<FrameIcon className="size-8 text-primary" />
					<div className="space-y-2">
						<h3 className="text-lg font-semibold">GEVEL</h3>
						<p className="text-sm text-muted-foreground">
							Soluções em engenharia elétrica e industrial com excelência e inovação.
						</p>
					</div>
					<p className="text-muted-foreground mt-8 text-sm md:mt-0">
						© {new Date().getFullYear()} GEVEL. Todos os direitos reservados.
					</p>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-xs font-medium text-primary">{section.label}</h3>
								<ul className="text-muted-foreground mt-4 space-y-2 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="hover:text-foreground inline-flex items-center transition-all duration-300 hover:text-primary"
											>
												{link.icon && <link.icon className="me-1 size-4" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};