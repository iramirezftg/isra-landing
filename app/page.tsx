"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Instagram, Youtube, BookOpen, Briefcase, Mic, Mail, Calendar } from "lucide-react";

// ====== LINKS (EDITA ESTOS) ======
const CALENDLY_URL = "https://calendly.com/isra-developer";
const HOTMART_CHECKOUT = "https://pay.hotmart.com/TU-LINK";
const EMAIL_CONTACT = "mailto:contacto@isradeveloper.com";
const SOCIALS = {
  instagram: "https://instagram.com/isra_developer",
  linkedin: "https://linkedin.com/in/israeldlangel",
  youtube: "https://youtube.com/@isra_developer",
  github: "https://github.com/iramirezftg",
};

// PLATAFORMAS
const HACKEA_TU_FUTURO_URL = "https://hackeatufuturo.base44.app/";
const HACKTALENT_URL = "https://hacktalent-latam.base44.app/";

// ====== ANALYTICS HELPERS ======
const trackEvent = (event: string) => {
  if (typeof window !== "undefined") {
    window.gtag?.("event", event);
    window.fbq?.("trackCustom", event);
    window.ttq?.track(event);
  }
};

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
          <a href="#lead"><Button size="lg" className="text-lg px-10 py-7 relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-500 after:content-[''] after:absolute after:inset-0 after:-translate-x-full after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:transition-transform after:duration-700 hover:after:translate-x-full hover:opacity-90">Quiero el plan gratis</Button></a>
          <a href="#coaching"><Button size="lg" variant="outline" className="text-lg px-10 py-7 border-zinc-600">Ver coaching</Button></a>
        </motion.div>
      </section>

      {/* STICKY TRANSFORMACIÓN */}
      <section className="relative h-[220vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center px-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xl md:text-2xl text-zinc-400 mb-4"
            >
              Antes eras
            </motion.p>

            <motion.h2
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-zinc-300 mb-12"
            >
              junior perdido
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-zinc-400 mb-4">Ahora eres</p>
              <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                candidato fuerte
              </h2>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA / SOLUCIÓN */}
      {/* PROBLEMA / SOLUCIÓN */}
      <section className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-20">
        {["El problema", "La solución"].map((title, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">{title}</h2>
              <p className="text-lg text-zinc-300 leading-relaxed">
                {i === 0
                  ? "Mandas CVs y nadie responde. Tienes cursos, pero no entrevistas. No es falta de talento: es falta de estrategia."
                  : "Un sistema probado que combina coaching, posicionamiento profesional y acceso a oportunidades reales."}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* LEAD MAGNET */}
      {/* LEAD MAGNET */}
      <section id="lead" className="relative max-w-4xl mx-auto px-6 py-28">
        <motion.div
          className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full"
          initial={{ y: 0 }}
          whileInView={{ y: -40 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 shadow-2xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-2xl rounded-2xl" />
            <CardContent className="relative p-10 text-center">
              <h3 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Recurso gratuito</h3>
              <p className="text-lg text-zinc-300 mb-8">Checklist para conseguir entrevistas tech en 30 días</p>
              <form className="grid md:grid-cols-3 gap-5">
                <input className="px-5 py-4 rounded-xl bg-zinc-950 border border-zinc-600 text-white text-lg focus:border-indigo-500 focus:shadow-[0_0_0_4px_rgba(99,102,241,0.25)] transition" placeholder="Nombre" />
                <input className="px-5 py-4 rounded-xl bg-zinc-950 border border-zinc-600 text-white text-lg focus:border-purple-500 focus:shadow-[0_0_0_4px_rgba(168,85,247,0.25)] transition" placeholder="Email" />
                <Button className="w-full text-lg py-6 relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-500 after:content-[''] after:absolute after:inset-0 after:-translate-x-full after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:transition-transform after:duration-700 hover:after:translate-x-full">Recibir ahora</Button>
              </form>
              <p className="text-sm text-zinc-400 mt-4">Cero spam. Solo contenido que sí te sirve.</p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* PROGRAMAS */}
      {/* PROGRAMAS */}
      <section id="coaching" className="relative max-w-6xl mx-auto px-6 py-32">
        <motion.div
          className="absolute -top-32 right-0 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full"
          initial={{ y: 0 }}
          whileInView={{ y: -60 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
        >
          Ecosistema Hackea tu Futuro
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[{ icon: BookOpen, title: "Coaching 1:1", desc: "CV, LinkedIn, entrevistas y estrategia personalizada.", link: CALENDLY_URL, cta: "Agendar llamada" },
          { icon: Briefcase, title: "HackTalent", desc: "Plataforma que conecta talento junior con oportunidades reales en LATAM.", link: HACKTALENT_URL, cta: "Ir a HackTalent" },
          { icon: Mic, title: "Conferencias", desc: "Charlas para universidades y empresas.", link: "#contact", cta: "Solicitar info" }]
            .map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <Card className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 hover:border-indigo-500/50 transition">
                  <CardContent className="p-8">
                    <item.icon size={34} className="mb-4 text-indigo-400" />
                    <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-zinc-300 text-lg mb-6">{item.desc}</p>
                    {item.link ? (
                      <a href={item.link}><Button className="w-full text-lg py-6 relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-500 after:content-[''] after:absolute after:inset-0 after:-translate-x-full after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:transition-transform after:duration-700 hover:after:translate-x-full">{item.cta}</Button></a>
                    ) : (
                      <Button variant="outline" className="w-full text-lg py-6">{item.cta}</Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>
      </section>

      {/* STORYTELLING */}
      <section className="relative max-w-6xl mx-auto px-6 py-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
        >
          Así funciona Hackea tu Futuro
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { step: "01", title: "Diagnóstico real", desc: "Revisamos tu perfil, CV y errores que hoy te están bloqueando." },
            { step: "02", title: "Estrategia clara", desc: "Diseñamos un plan para posicionarte como candidato fuerte." },
            { step: "03", title: "Ejecución", desc: "Aplicamos, iteramos y consigues entrevistas reales." }
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -6 }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
              <div className="relative p-8 bg-zinc-900 rounded-2xl">
                <span className="text-sm text-indigo-400">Paso {item.step}</span>
                <h3 className="text-2xl font-semibold mt-2 mb-3">{item.title}</h3>
                <p className="text-zinc-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="relative max-w-6xl mx-auto px-6 py-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
        >
          Lo que dicen después del proceso
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { name: "Carlos M.", role: "Ingeniería / Junior", text: "Pasé de mandar CVs sin respuesta a tener entrevistas reales en menos de 2 meses." },
            { name: "Fernanda R.", role: "Estudiante de sistemas", text: "No fue motivación barata. Fue estrategia clara y feedback real." },
            { name: "Luis A.", role: "Bootcamp graduate", text: "Por primera vez entendí cómo vender mi perfil sin mentir ni exagerar." }
          ].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
              <div className="relative p-8 bg-zinc-900 rounded-2xl">
                <p className="text-zinc-300 mb-6">“{item.text}”</p>
                <div className="border-t border-zinc-700 pt-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-zinc-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VIDEO + UNIVERSIDADES */}
      <section className="relative max-w-6xl mx-auto px-6 py-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
        >
          Colaboraciones con universidades y empresas
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-zinc-300 mb-6">
              Trabajo con universidades, bootcamps y empresas que buscan preparar talento real para el mercado laboral tech.
            </p>
            <p className="text-lg text-zinc-400 mb-8">
              Conferencias, workshops y programas prácticos enfocados en empleabilidad, no teoría.
            </p>
            <div className="flex gap-4">
              <a href={CALENDLY_URL}><Button className="bg-gradient-to-r from-indigo-500 to-purple-500">Agendar colaboración</Button></a>
              <a href={HACKEA_TU_FUTURO_URL}><Button variant="outline">Ver plataforma</Button></a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-700"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Presentación Isra Developer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL AGRESIVO */}
      <section className="relative max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-3xl rounded-full" />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
        >
          Deja de aplicar a ciegas
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative text-xl text-zinc-300 max-w-2xl mx-auto mb-12"
        >
          Si sigues haciendo lo mismo, seguirás obteniendo silencio. Agenda una llamada y construyamos tu estrategia real.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative flex justify-center"
        >
          <a href={CALENDLY_URL} onClick={() => trackEvent('cta_agendar_llamada')}>
            <Button size="lg" className="text-xl px-12 py-8 relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-500 after:content-[''] after:absolute after:inset-0 after:-translate-x-full after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent after:transition-transform after:duration-700 hover:after:translate-x-full">
              Agenda tu llamada ahora
            </Button>
          </a>
        </motion.div>
        <p className="relative text-sm text-zinc-400 mt-6">Plazas limitadas · No es para quien no quiere cambiar</p>
      </section>

      {/* EBOOKS */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Ebooks & Recursos</h2>
        <p className="text-xl text-zinc-300 mb-10">Guías prácticas para acelerar tu carrera tech.</p>
        <a href={HOTMART_CHECKOUT}><Button size="lg" className="text-lg px-10 py-7">Ver ebooks</Button></a>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Contacto profesional</h2>
        <p className="text-xl text-zinc-300 mb-10">Universidades, empresas o colaboraciones.</p>
        <div className="flex justify-center gap-6">
          <a href={EMAIL_CONTACT}><Button variant="outline" className="text-lg py-6 px-8"><Mail className="mr-2" />Email</Button></a>
          <a href={CALENDLY_URL}><Button className="text-lg py-6 px-8"><Calendar className="mr-2" />Agendar</Button></a>
        </div>
      </section>

      {/* FOOTER */}
      {/* FOOTER */}
      <footer className="relative mt-32">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-900 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="flex justify-center gap-8 mb-8">
            {[{ icon: Instagram, link: SOCIALS.instagram }, { icon: Linkedin, link: SOCIALS.linkedin }, { icon: Youtube, link: SOCIALS.youtube }, { icon: Github, link: SOCIALS.github }].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                whileHover={{ y: -4 }}
                className="text-zinc-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 transition"
              >
                <item.icon size={28} />
              </motion.a>
            ))}
          </div>
          <p className="text-center text-sm text-zinc-400">
            © {new Date().getFullYear()} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">isra_developer</span> · Hackea tu futuro
          </p>
        </div>
      </footer>

      {/* CTA STICKY MOBILE */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden w-[92%]">
        <a href={CALENDLY_URL} onClick={() => trackEvent('cta_sticky_mobile')}>
          <Button className="w-full py-6 text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">
            Agenda tu llamada
          </Button>
        </a>
      </div>
    </div>
  );
}
