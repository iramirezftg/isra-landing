"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Instagram, Youtube, BookOpen, Briefcase, Mic, Mail, Calendar } from "lucide-react";

// ====== LINKS ======
const CALENDLY_URL = "https://calendly.com/isra-developer";
const HOTMART_CHECKOUT = "https://pay.hotmart.com/TU-LINK";
const EMAIL_CONTACT = "mailto:contacto@isradeveloper.com";

const SOCIALS = {
  instagram: "https://instagram.com/isra_developer",
  linkedin: "https://linkedin.com/in/isra-developer",
  youtube: "https://youtube.com/@isra_developer",
  github: "https://github.com/isra-developer",
};

const HACKEA_TU_FUTURO_URL = "https://hackeatufuturo.base44.app/";
const HACKTALENT_URL = "https://hacktalent-latam.base44.app/";

export default function LandingIsraDeveloper() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-zinc-100 relative overflow-hidden">

      {/* HERO */}
      <section className="relative max-w-6xl mx-auto px-6 py-32 text-center">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-3xl rounded-full" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
        >
          Hackea tu futuro
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-12"
        >
          Te ayudo a conseguir tu primer empleo en tecnología con estrategia, mentoría real y oportunidades concretas.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative flex flex-wrap justify-center gap-6"
        >
          <a href="#lead"><Button size="lg" className="text-lg px-10 py-7 relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90">Quiero el plan gratis</Button></a>
          <a href="#coaching"><Button size="lg" variant="outline" className="text-lg px-10 py-7 border-zinc-600">Ver coaching</Button></a>
        </motion.div>
      </section>

      {/* STICKY TRANSFORMACIÓN */}
      <section className="relative h-[220vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-center px-6">
            <p className="text-xl md:text-2xl text-zinc-400 mb-4">Antes eras</p>
            <h2 className="text-4xl md:text-6xl font-bold text-zinc-300 mb-12">junior perdido</h2>
            <p className="text-xl md:text-2xl text-zinc-400 mb-4">Ahora eres</p>
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">candidato fuerte</h2>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA / SOLUCIÓN */}
      <section className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-20">
        {["El problema", "La solución"].map((title, i) => (
          <motion.div key={title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }}>
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">{title}</h2>
            <p className="text-lg text-zinc-300">
              {i === 0
                ? "Mandas CVs y nadie responde. No es falta de talento, es falta de estrategia."
                : "Un sistema probado de coaching, posicionamiento y oportunidades reales."}
            </p>
          </motion.div>
        ))}
      </section>

      {/* LEAD MAGNET */}
      <section id="lead" className="max-w-4xl mx-auto px-6 py-28">
        <Card className="bg-zinc-900 border border-zinc-700">
          <CardContent className="p-10 text-center">
            <h3 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Recurso gratuito</h3>
            <p className="text-lg text-zinc-300 mb-8">Checklist para conseguir entrevistas tech</p>
            <form className="grid md:grid-cols-3 gap-5">
              <input className="px-5 py-4 rounded-xl bg-zinc-950 border border-zinc-600 text-white" placeholder="Nombre" />
              <input className="px-5 py-4 rounded-xl bg-zinc-950 border border-zinc-600 text-white" placeholder="Email" />
              <Button className="w-full text-lg py-6 bg-gradient-to-r from-indigo-500 to-purple-500">Recibir ahora</Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* PROGRAMAS */}
      <section id="coaching" className="max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Ecosistema Hackea tu Futuro</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[{ icon: BookOpen, title: "Coaching 1:1", desc: "CV, LinkedIn y entrevistas", link: CALENDLY_URL },
          { icon: Briefcase, title: "HackTalent", desc: "Talento junior con empresas reales", link: HACKTALENT_URL },
          { icon: Mic, title: "Conferencias", desc: "Universidades y empresas", link: "#contact" }]
            .map((item) => (
              <Card key={item.title} className="bg-zinc-900 border border-zinc-700">
                <CardContent className="p-8">
                  <item.icon size={34} className="mb-4 text-indigo-400" />
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-zinc-300 mb-6">{item.desc}</p>
                  <a href={item.link}><Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500">Ver más</Button></a>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-5xl mx-auto px-6 py-32 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Deja de aplicar a ciegas</h2>
        <p className="text-xl text-zinc-300 mb-12">Agenda una llamada y construyamos tu estrategia real.</p>
        <a href={CALENDLY_URL}><Button size="lg" className="text-xl px-12 py-8 bg-gradient-to-r from-indigo-500 to-purple-500">Agenda tu llamada</Button></a>
      </section>

      {/* FOOTER */}
      <footer className="mt-32 border-t border-zinc-800 py-16 text-center">
        <div className="flex justify-center gap-8 mb-6">
          <a href={SOCIALS.instagram}><Instagram /></a>
          <a href={SOCIALS.linkedin}><Linkedin /></a>
          <a href={SOCIALS.youtube}><Youtube /></a>
          <a href={SOCIALS.github}><Github /></a>
        </div>
        <p className="text-sm text-zinc-400">© {new Date().getFullYear()} isra_developer · Hackea tu futuro</p>
      </footer>

      {/* CTA STICKY MOBILE */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden w-[92%]">
        <a href={CALENDLY_URL}><Button className="w-full py-6 text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Agenda tu llamada</Button></a>
      </div>
    </div>
  );
}
