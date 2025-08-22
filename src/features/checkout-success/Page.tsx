"use client";

import { motion } from "framer-motion";
import { Clock, Mail, ShieldCheck } from "lucide-react";
import { ActionButtons } from "./components/ActionButtons";

export function CheckoutSuccessPage() {
  return (
    <div className="relative min-h-[calc(100vh-100px)] flex items-center justify-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 size-[620px] rounded-full
                        bg-primary/20 blur-[80px]" />
        <div className="absolute right-10 bottom-10 size-72 rounded-full
                        bg-primary/10 blur-[60px]" />
      </div>

      <section className="mx-4 w-full max-w-2xl rounded-2xl border border-border bg-card/80 backdrop-blur-sm shadow-xl p-8">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
          <AnimatedCheck />
        </div>

        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Tudo certo com sua compra!
            </span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Em instantes você receberá por e-mail as instruções para acessar o produto.
          </p>
        </div>

        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 text-sm">
          <li className="flex items-center gap-2 rounded-lg border border-border bg-card p-3">
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-foreground">Confirmação enviada</span>
          </li>
          <li className="flex items-center gap-2 rounded-lg border border-border bg-card p-3">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-foreground">Acesso imediato</span>
          </li>
          <li className="flex items-center gap-2 rounded-lg border border-border bg-card p-3">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="text-foreground">Compra segura</span>
          </li>
        </ul>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <ActionButtons />
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Não encontrou o e-mail? Veja a caixa de spam ou promoções.
        </p>
      </section>

      <ConfettiLite />
    </div>
  );
}

function AnimatedCheck() {
  return (
    <svg viewBox="0 0 52 52" className="h-10 w-10">
      <motion.circle
        cx="26" cy="26" r="24" fill="none"
        stroke="currentColor" className="text-primary/40"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0.6 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <motion.path
        d="M16 27.5 23 34 36 18"
        fill="none"
        stroke="currentColor"
        className="text-primary"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
      />
    </svg>
  );
}

function ConfettiLite() {
  const pieces = Array.from({ length: 14 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {pieces.map((_, i) => (
        <span
          key={i}
          className="confetti block absolute h-2 w-2 rounded-sm"
          style={{
            left: `${(i + 1) * (100 / pieces.length)}%`,
            animationDelay: `${i * 0.07}s`,
          }}
        />
      ))}
      <style jsx>{`
        .confetti {
          top: -10px;
          background: hsl(${Math.round(120 + Math.random() * 60)} 70% 50%);
          opacity: 0.85;
          transform: translateY(0) rotate(0deg);
          animation: fall 1.8s ease-in forwards;
        }
        @keyframes fall {
          to {
            transform: translateY(120vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}