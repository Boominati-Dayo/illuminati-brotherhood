"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-obsidian">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass rounded-2xl p-8 md:p-12"
                >
<h1 className="text-4xl font-serif gold-gradient-text mb-8">Política de Privacidade</h1>
                    
                    <div className="space-y-8 text-foreground/70 font-light">
                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Informações que Coletamos</h2>
                            <p>Coletamos informações que você nos fornece diretamente, incluindo nome, email, número de telefone e informações de pagamento quando você se registra ou faz uma compra. Também coletamos dados de uso e informações do dispositivo automaticamente.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Como Usamos Suas Informações</h2>
                            <p>Suas informações são usadas para fornecer e melhorar nossos serviços, processar transações, comunicar-se com você sobre sua assinatura e cumprir obrigações legais. Também podemos usar suas informações para fins de segurança e prevenção de fraudes.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Compartilhamento de Informações</h2>
                            <p>Não vendemos suas informações pessoais. Podemos compartilhar suas informações com prestadores de serviços que nos auxiliam na operação da plataforma, e quando exigido por lei ou para proteger nossos direitos.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Segurança dos Dados</h2>
                            <p>Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Seus Direitos</h2>
                            <p>Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Também pode se opor ao processamento de seus dados ou solicitar a portabilidade dos dados. Entre em contato conosco para exercer esses direitos.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Cookies</h2>
                            <p>Utilizamos cookies para melhorar sua experiência. Você pode opt-out de cookies não essenciais através do banner de consentimento de cookies em nosso site.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Alterações nesta Política</h2>
                            <p>Podemos atualizar esta política periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova política nesta página e atualizando a data de &quot;última atualização&quot;.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Contato</h2>
                            <p>Se tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através da página de contato ou pelo email contato@illuminati-brotherhood.vercel.app.</p>
                        </section>

                        <p className="text-[10px] text-gold/30 uppercase tracking-widest text-center">Última atualização: 2026</p>
                    </div>
                </motion.div>
            </div>

            <footer className="py-16 border-t border-gold/10 bg-obsidian mt-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        <div className="text-center md:text-left">
                            <h4 className="text-gold font-serif text-lg mb-4 tracking-wider">Navigation</h4>
                            <div className="flex flex-col gap-3">
                                <Link href="/" className="text-gold/50 hover:text-gold transition-all text-sm uppercase tracking-widest">Home</Link>
                                <Link href="/shop" className="text-gold/50 hover:text-gold transition-all text-sm uppercase tracking-widest">Artifacts Shop</Link>
                                <Link href="/track" className="text-gold/50 hover:text-gold transition-all text-sm uppercase tracking-widest">Order Tracking</Link>
                                <Link href="/contact" className="text-gold/50 hover:text-gold transition-all text-sm uppercase tracking-widest">Contact</Link>
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <h4 className="text-gold font-serif text-lg mb-4 tracking-wider">Legal</h4>
                            <div className="flex flex-col gap-3">
                                <Link href="/privacy" className="text-gold/50 hover:text-gold transition-all text-sm uppercase tracking-widest">Privacy Policy</Link>
                                <Link href="/terms" className="text-gold/50 hover:text-gold transition-all text-sm uppercase tracking-widest">Terms of Service</Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <h4 className="text-gold font-serif text-lg mb-4 tracking-wider">Connect With Us</h4>
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
                        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/40 hover:text-gold hover:border-gold transition-all">
                            <ArrowUp size={16} />
                        </button>
                    </div>
                </div>
            </footer>
        </main>
    );
}