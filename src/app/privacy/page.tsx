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
                    <h1 className="text-4xl font-serif gold-gradient-text mb-8">Privacy Policy</h1>
                    
                    <div className="space-y-8 text-foreground/70 font-light">
                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Information We Collect</h2>
                            <p>We collect information you provide directly to us, including name, email, phone number, and payment information when you register or make a purchase. We also collect usage data and device information automatically.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">How We Use Your Information</h2>
                            <p>Your information is used to provide and improve our services, process transactions, communicate with you about your membership, and comply with legal obligations. We may also use your information for security and fraud prevention purposes.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Information Sharing</h2>
                            <p>We do not sell your personal information. We may share your information with service providers who assist us in operating our platform, and when required by law or to protect our rights.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Data Security</h2>
                            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Your Rights</h2>
                            <p>You have the right to access, correct, or delete your personal information. You may also object to processing or request data portability. Contact us to exercise these rights.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Cookies</h2>
                            <p>We use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings, but disabling them may affect functionality.</p>
                        </section>

                        <section>
                            <h2 className="text-gold font-serif text-xl mb-4">Contact Us</h2>
                            <p>If you have questions about this Privacy Policy, please contact us through our official channels.</p>
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