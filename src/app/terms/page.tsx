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
                    <h1 className="text-4xl font-serif gold-gradient-text mb-8">Terms of Service</h1>
                    
                    <div className="space-y-8 text-foreground/70 font-light">
                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Acceptance of Terms</h2>
                            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Membership Eligibility</h2>
                            <p>Our services are intended for individuals who are of legal age and have the capacity to enter into binding agreements. By registering, you represent that you meet these requirements.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">User Responsibilities</h2>
                            <p>You agree to provide accurate information and maintain the security of your account. You are responsible for all activities under your account and must notify us immediately of any unauthorized use.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Payment and Purchases</h2>
                            <p>All purchases are final unless otherwise specified. You agree to pay all charges at the prices in effect when the charges are incurred. We reserve the right to modify prices at any time.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Intellectual Property</h2>
                            <p>Todo o conteúdo, designs e materiais neste site são propriedade intelectual da Iluminati Brotherhood. Você não pode reproduzir, distribuir ou modificar qualquer conteúdo sem consentimento prévio por escrito.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Limitation of Liability</h2>
                            <p>We shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services. Our maximum liability shall not exceed the amount paid by you for the services.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Termination</h2>
                            <p>We reserve the right to terminate or suspend your account at any time for violation of these terms or for any other reason at our sole discretion.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Governing Law</h2>
                            <p>These terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved in the appropriate jurisdiction.</p>
                        </section>

                        <p className="text-gold/40 text-sm pt-8 border-t border-gold/10">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
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