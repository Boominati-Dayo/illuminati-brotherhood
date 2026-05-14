"use client";

import { motion } from "framer-motion";

const benefits = [
    "Transforme grandes sonhos em realidade",
    "Eleve as crenças sobrenaturais",
    "Eleve da classe baixa para alta sociedade",
    "Salário mensal de $100.000 USD",
    "ID de Membresia Porta Aberta",
    "Benefício de boas-vindas de $30.000.000",
    "Voos globais gratuitos e refeições de elite",
];

export default function Benefits() {
    return (
        <section className="py-24 bg-obsidian relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif gold-gradient-text mb-6 md:mb-8">Recompensas dos Escolhidos</h2>
                        <p className="text-foreground/60 text-base md:text-lg mb-8 md:mb-10 font-light max-w-xl">
                            Nosso objetivo é elevar desafios e dar-lhes fortuna, aceitar os fracos e torná-los mais fortes, e transformar os pobres em ricos e famosos.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gold/5 transition-all group cursor-default"
                                >
                                    <div className="w-6 h-6 mt-0.5 border border-gold/50 rounded-full flex-shrink-0 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/20 transition-all">
                                        <div className="w-2.5 h-2.5 bg-gold rounded-full group-hover:scale-125 transition-transform" />
                                    </div>
                                    <span className="text-foreground/80 font-light group-hover:text-foreground transition-colors">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border-[1px] border-gold/10 rounded-full"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-[20%] border-[1px] border-gold/20 rounded-[40%]"
                                />
                                <div className="z-10 text-[180px] text-gold/20 font-serif opacity-30 select-none">🔺</div>
                                <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                    <p className="text-gold font-bold text-6xl italic">$30M</p>
                                    <p className="text-gold/60 uppercase tracking-widest text-xs mt-2">Benefício de Boas-Vindas</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}