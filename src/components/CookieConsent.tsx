"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
    const [showConsent, setShowConsent] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const hasConsented = localStorage.getItem("cookie_consent");
        if (!hasConsented) {
            setShowConsent(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "accepted");
        setShowConsent(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie_consent", "declined");
        setShowConsent(false);
    };

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {showConsent && (
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    className="fixed bottom-0 left-0 right-0 z-[200] bg-obsidian-light border-t border-gold/20 p-4 md:p-6"
                >
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                                <Cookie className="w-6 h-6 text-gold" />
                            </div>
                            <div>
                                <h3 className="text-gold font-serif text-lg mb-1">Consentimento de Cookies</h3>
                                <p className="text-foreground/60 text-sm">
                                    Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa{" "}
                                    <Link href="/privacy" className="text-gold hover:underline">Política de Privacidade</Link> e{" "}
                                    <Link href="/terms" className="text-gold hover:underline">Termos</Link>.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 shrink-0">
                            <button
                                onClick={handleDecline}
                                className="px-6 py-3 border border-gold/30 text-gold/60 hover:text-gold hover:border-gold transition-all rounded-md text-sm uppercase tracking-widest"
                            >
                                Recusar
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-6 py-3 bg-gold text-obsidian font-bold uppercase tracking-widest text-sm rounded-md hover:bg-gold-light transition-all"
                            >
                                Aceitar
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}