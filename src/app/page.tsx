"use client";

import Hero from "@/components/Hero";
import SacredSteps from "@/components/SacredSteps";
import Benefits from "@/components/Benefits";
import InductionForm from "@/components/InductionForm";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SacredSteps />
      <Benefits />

      <section className="py-24 bg-obsidian-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif gold-gradient-text mb-4">Recrutamento Final</h2>
            <p className="text-gold/60 tracking-[0.2em] uppercase text-sm">Envie suas informações com segurança</p>
          </div>

          <InductionForm />
        </div>
      </section>

      <footer className="py-16 border-t border-gold/10 bg-obsidian">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center md:text-left">
              <h4 className="text-gold font-serif text-lg mb-4 tracking-wider">Navegação</h4>
              <div className="flex flex-col gap-3">
                <Link href="/" className="text-gold/50 hover:text-gold transition-all text-sm uppercase tracking-widest">Início</Link>
                <Link href="/shop" className="text-gold/50 hover:text-gold transition-all text-sm uppercase tracking-widest">Loja de Artefatos</Link>
                <Link href="/track" className="text-gold/50 hover:text-gold transition-all text-sm uppercase tracking-widest">Rastrear Pedido</Link>
                <Link href="/contact" className="text-gold/50 hover:text-gold transition-all text-sm uppercase tracking-widest">Contato</Link>
                <a href="#induction" className="text-gold/50 hover:text-gold transition-all text-sm uppercase tracking-widest">Cadastro</a>
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
                <a href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/50 hover:text-gold hover:border-gold transition-all">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/50 hover:text-gold hover:border-gold transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/50 hover:text-gold hover:border-gold transition-all">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/50 hover:text-gold hover:border-gold transition-all">
                  <Linkedin size={18} />
                </a>
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