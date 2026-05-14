"use client";

import { motion } from "framer-motion";

const steps = [
    {
        title: "1. Processo de Registro",
        description: "Esta é a primeira e mais importante etapa. Envolve seu registro oficial pelo Mestre Principal que registrará seu nome no livro de registros, confirmando sua intenção e prontidão para ingressar nesta grande organização.",
    },
    {
        title: "2. Processo de Iniciação",
        description: "Após a conclusão do registro, você passará pelo processo de iniciação. Esta etapa conecta você espiritual e simbolicamente à luz e aos princípios da organização. Marca sua aceitação no círculo e prepara você para as bênçãos que seguirão.",
    },
    {
        title: "3. Cerimônia de Instalação Final",
        description: "Esta é a última e mais significativa fase. Durante esta sagrada cerimonia, você receberá seus benefícios, será ordenado como membro completo e apresentará seu Certificado de Membresia junto com outros itens valiosos que significam seu novo status dentro da organização.",
    },
];

export default function SacredSteps() {
    return (
        <section id="steps" className="py-24 bg-obsidian-light relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-serif gold-gradient-text mb-4">O Caminho Sagrado</h2>
                    <div className="h-0.5 w-16 md:w-24 bg-gold mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="glass p-6 md:p-10 rounded-lg relative group h-full flex flex-col cursor-pointer hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 transition-all"
                        >
                            <div className="absolute -top-6 left-10 w-12 h-12 bg-gold flex items-center justify-center text-obsidian font-bold text-xl rounded-full sacred-glow group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                                {index + 1}
                            </div>
                            <h3 className="text-2xl font-serif text-gold mb-6 mt-4 group-hover:text-gold-light transition-colors">{step.title}</h3>
                            <p className="text-foreground/70 leading-relaxed font-light flex-grow group-hover:text-foreground/80 transition-colors">
                                {step.description}
                            </p>
                            <div className="absolute bottom-4 right-4 w-8 h-8 border border-gold/20 rounded-full flex items-center justify-center group-hover:border-gold/60 group-hover:bg-gold/10 transition-all">
                                <span className="text-gold/40 group-hover:text-gold text-lg">→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 md:mt-24 text-center glass p-8 md:p-12 max-w-4xl mx-auto rounded-xl border-gold/30"
                >
                    <p className="text-lg md:text-2xl font-serif italic text-gold/90 leading-relaxed">
                        &quot;Cada uma destas etapas é essencial e deve ser completada em sequência adequada para que um possa participar plenamente dos privilégios e honras reservados para os membros.&quot;
                    </p>
                    <p className="mt-8 text-gold font-bold tracking-[0.3em] uppercase">Siga a luz!!!</p>
                </motion.div>
            </div>
        </section>
    );
}