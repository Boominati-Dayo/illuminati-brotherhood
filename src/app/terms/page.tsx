"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";

export default function TermsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-obsidian">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass rounded-2xl p-8 md:p-12"
                >
                    <h1 className="text-4xl font-serif gold-gradient-text mb-8">Termos de Serviço</h1>

                    <div className="space-y-8 text-foreground/70 font-light">
                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Aceitação dos Termos</h2>
                            <p>Ao acessar e usar este website, você aceita e concorda em estar vinculado aos termos e provisões deste acordo. Se você não concorda com estes termos, por favor não use nossos serviços.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Elegibilidade para Membros</h2>
                            <p>Nossos serviços são destinados para indivíduos que são de maioridade legal e têm capacidade de celebrar acordos vinculantes. Ao se registrar, você representa que atende a esses requisitos.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Responsabilidades do Usuário</h2>
                            <p>Você concorda em fornecer informações precisas e manter a segurança da sua conta. Você é responsável por todas as atividades sob sua conta e deve nos notificar imediatamente sobre qualquer uso não autorizado.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Pagamento e Compras</h2>
                            <p>Todas as compras são finais, a menos que especificado de outra forma. Você concorda em pagar todas as cobranças aos preços vigentes quando as cobranças são incorridas. Reservamo-nos o direito de modificar preços a qualquer momento.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Propriedade Intelectual</h2>
                            <p>Todo o conteúdo do site, incluindo textos, gráficos, logotipos e imagens, é propriedade da Iluminati Brotherhood e está protegido por leis de direitos autorais. Você não pode reproduzir, distribuir ou criar trabalhos derivados sem nossa permissão.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Limitação de Responsabilidade</h2>
                            <p>Não somos responsáveis por quaisquer danos indiretos, incidentais, especiais ou consequentes decorrentes do uso de nossos serviços. Nossa responsabilidade total é limitada ao valor que você pagou pelos serviços.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Rescisão</h2>
                            <p>Reservamo-nos o direito de rescindir ou suspender sua conta a qualquer momento por violação destes termos ou por qualquer outro motivo a nosso exclusivo critério.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Indenização</h2>
                            <p>Você concorda em indenizar e isentar a Iluminati Brotherhood de quaisquer reivindicações, danos ou despesas decorrentes de sua violação destes termos ou de seu uso de nossos serviços.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Alterações nos Termos</h2>
                            <p>Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas através de um aviso em nosso site. Seu uso contínuo após as alterações constitui aceitação dos novos termos.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Lei Aplicável</h2>
                            <p>Estes termos são regidos pelas leis do Brasil. Qualquer disputa decorrente destes termos será resolvida nos tribunais brasileiros.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Contato</h2>
                            <p>Se tiver dúvidas sobre estes Termos de Serviço, entre em contato conosco através da página de contato.</p>
                        </section>

                        <p className="text-[10px] text-gold/30 uppercase tracking-widest text-center">Última atualização: 2026</p>
                    </div>
                </motion.div>
            </div>

            <footer className="py-16 border-t border-gold/10 bg-obsidian mt-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        <div className="text-center md:text-left">
                            <h4 className="text-gold font-serif text-lg mb-4 tracking-wider">Navegação</h4>
                            <div className="flex flex-col gap-3">
                                <Link href="/" className="text-gold/50 hover:text-gold transition-all text-sm uppercase tracking-widest">Início</Link>
                                <Link href="/shop" className="text-gold/50 hover:text-gold transition-all text-sm uppercase tracking-widest">Loja de Artefatos</Link>
                                <Link href="/track" className="text-gold/50 hover:text-gold transition-all text-sm uppercase tracking-widest">Rastrear Pedido</Link>
                                <Link href="/contact" className="text-gold/50 hover:text-gold transition-all text-sm uppercase tracking-widest">Contato</Link>
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <h4 className="text-gold font-serif text-lg mb-4 tracking-wider">Legal</h4>
                            <div className="flex flex-col gap-3">
                                <Link href="/privacy" className="text-gold/50 hover:text-gold transition-all text-sm uppercase tracking-widest">Política de Privacidade</Link>
                                <Link href="/terms" className="text-gold/50 hover:text-gold transition-all text-sm uppercase tracking-widest">Termos de Serviço</Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <h4 className="text-gold font-serif text-lg mb-4 tracking-wider">Conecte-se Conosco</h4>
                            <div className="flex justify-center gap-6">
                                <a href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/50 hover:text-gold hover:border-gold transition-all"><Facebook size={18} /></a>
                                <a href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/50 hover:text-gold hover:border-gold transition-all"><Instagram size={18} /></a>
                                <a href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/50 hover:text-gold hover:border-gold transition-all"><Twitter size={18} /></a>
                                <a href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/50 hover:text-gold hover:border-gold transition-all"><Linkedin size={18} /></a>
                            </div>
                        </div>
                        <div className="text-center md:text-right">
                            <h4 className="text-gold font-serif text-lg mb-4 tracking-wider">Iluminati Brotherhood</h4>
                            <p className="text-gold/40 text-sm tracking-wide mb-4">Siga a Luz</p>
                            <p className="text-gold/30 text-xs uppercase tracking-[0.3em]">Verdade • Excelência • Valor</p>
                        </div>
                    </div>

                    <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gold/20 text-[10px] tracking-widest uppercase">© {new Date().getFullYear()} Iluminati Brotherhood. Todos os direitos reservados.</p>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/40 hover:text-gold hover:border-gold transition-all"
                        >
                            <ArrowUp size={16} />
                        </button>
                    </div>
                </div>
            </footer>
        </main>
    );
}