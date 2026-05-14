"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Lock, User, Loader2 } from "lucide-react";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="min-h-screen bg-obsidian flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
            </div>
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const res = await signIn("credentials", {
            username,
            password,
            redirect: false,
        });

        if (res?.error) {
            setError("Invalid sacred credentials.");
            setLoading(false);
        } else {
            router.push("/admin");
        }
    };

    return (
        <div className="min-h-screen bg-obsidian flex flex-col items-center justify-center pt-32 pb-8 px-6">
            <div className="w-full max-w-md">
                <div className="text-center mb-10">
                    <div className="relative w-24 h-24 mx-auto mb-6 sacred-glow rounded-full border border-gold/20 overflow-hidden bg-obsidian-light flex items-center justify-center">
                        <span className="text-gold text-2xl font-serif">R&C</span>
                    </div>
                    <h1 className="text-3xl font-serif gold-gradient-text tracking-widest uppercase">Admin Entry</h1>
                </div>

                <div className="glass p-8 rounded-2xl border-gold/20 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-gold/60 text-xs uppercase tracking-widest">Master Identity</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full bg-obsidian-light border border-gold/20 rounded-md py-3 pl-10 pr-4 text-gold focus:border-gold outline-none transition-all"
                                    required
                                    suppressHydrationWarning
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-gold/60 text-xs uppercase tracking-widest">Secret Key</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-obsidian-light border border-gold/20 rounded-md py-3 pl-10 pr-4 text-gold focus:border-gold outline-none transition-all"
                                    required
                                    suppressHydrationWarning
                                />
                            </div>
                        </div>

                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gold text-obsidian py-4 rounded-md font-bold uppercase tracking-[0.2em] hover:bg-gold-light transition-all flex items-center justify-center gap-2"
                            suppressHydrationWarning
                        >
                            {loading ? <Loader2 className="animate-spin" /> : "Authenticate"}
                        </button>
                    </form>
                </div>

                <p className="mt-8 text-center text-gold/20 text-[10px] uppercase tracking-widest font-light">
                    Unauthorized access is recorded in the binary records.
                </p>
            </div>
        </div>
    );
}
