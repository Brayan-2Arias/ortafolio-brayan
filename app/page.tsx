"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Code2,
  Globe,
  Mail,
  MapPin,
  Sparkles,
  FolderGit2,
  Wrench,
  GraduationCap,
  Briefcase,
  Send,
  CheckCircle2,
  AlertTriangle,
  Menu,
  X,
} from "lucide-react";
import {
  personalInfo,
  aboutData,
  experiences,
  courseActivities,
  skillCategories,
  educationList,
  ActivityDetail,
} from "./data/portfolioData";
import ActivityModal from "./components/ActivityModal";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Formación", href: "#formacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function HomePage() {
  const [selectedActivity, setSelectedActivity] = useState<ActivityDetail | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        setFeedback({
          type: "error",
          text: data.error || "Revisa los campos del formulario e intenta de nuevo.",
        });
      } else {
        setFeedback({
          type: "success",
          text: data.message || "¡Mensaje enviado correctamente!",
        });
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch {
      setFeedback({
        type: "error",
        text: "Error de conexión al enviar el mensaje.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070d19] text-white">
      <header className="sticky top-0 z-40 border-b border-blue-900/70 bg-[#070d19]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a
            href="#inicio"
            className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500 text-sm font-black text-slate-950">
              BA
            </span>
            <span>
              {personalInfo.shortName}
              <span className="text-sky-400">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-sky-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            className="rounded-lg border border-blue-800 bg-blue-950/60 p-2 text-slate-200 md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="border-t border-blue-900/70 bg-[#0b162c] px-4 py-4 md:hidden">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-blue-900/50 hover:text-sky-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-6xl space-y-24 px-4 py-12 sm:px-6 md:py-16">
        <section
          id="inicio"
          className="relative overflow-hidden rounded-3xl border border-blue-800/70 bg-gradient-to-br from-[#0c1b36] via-[#091428] to-[#060c18] p-8 shadow-2xl md:p-14"
        >
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold text-sky-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{personalInfo.availability}</span>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
                  {personalInfo.role}
                </p>
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                  {personalInfo.fullName}
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  {personalInfo.tagline}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#proyectos"
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-400"
                >
                  <span>Ver proyectos y actividades</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-700 bg-blue-950/70 px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-400 hover:bg-blue-900/60"
                >
                  <span>Contactarme</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-800 bg-[#070d19] px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-sky-400 hover:text-sky-300"
                >
                  <Code2 className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-800 bg-[#070d19] px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-sky-400 hover:text-sky-300"
                >
                  <Globe className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="flex flex-col items-center rounded-2xl border border-blue-800/80 bg-[#070d19]/90 p-6 text-center shadow-lg">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-sky-400 bg-gradient-to-br from-blue-900 to-sky-950 text-3xl font-black text-white shadow-inner">
                  BJA
                </div>
                <h2 className="mt-4 text-lg font-bold text-white">{personalInfo.shortName}</h2>
                <p className="mt-1 flex items-center justify-center gap-1.5 text-xs text-slate-300">
                  <MapPin className="h-3.5 w-3.5 text-sky-400" />
                  <span>{personalInfo.location}</span>
                </p>
                <div className="mt-5 grid w-full grid-cols-2 gap-3 border-t border-blue-900/80 pt-5 text-left">
                  <div className="rounded-xl bg-[#0c1b36] p-3">
                    <p className="text-xs text-slate-400">Enfoque</p>
                    <p className="mt-0.5 text-xs font-bold text-sky-300">IA · ML · Web</p>
                  </div>
                  <div className="rounded-xl bg-[#0c1b36] p-3">
                    <p className="text-xs text-slate-400">Stack</p>
                    <p className="mt-0.5 text-xs font-bold text-white">Next.js · Python</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="scroll-mt-24 space-y-8">
          <div className="border-b border-blue-900/80 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              01 · Perfil
            </span>
            <h2 className="mt-1 text-3xl font-extrabold text-white">Sobre mí</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            <div className="space-y-4 rounded-2xl border border-blue-900/70 bg-[#0b162c] p-6 text-slate-200 lg:col-span-6">
              {aboutData.summary.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-slate-200">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
              {aboutData.interests.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-blue-900/70 bg-[#0b162c] p-5 transition hover:border-sky-500/50"
                >
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="scroll-mt-24 space-y-8">
          <div className="border-b border-blue-900/80 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              02 · Trayectoria
            </span>
            <h2 className="mt-1 flex items-center gap-2 text-3xl font-extrabold text-white">
              <Briefcase className="h-7 w-7 text-sky-400" />
              <span>Experiencia y Proyectos Colaborativos</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {experiences.map((exp) => (
              <div
                key={exp.role}
                className="flex flex-col justify-between rounded-2xl border border-blue-900/70 bg-[#0b162c] p-6"
              >
                <div>
                  <span className="inline-block rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">
                    {exp.period}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-sm font-medium text-sky-300">{exp.organization}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{exp.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-200">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-blue-900/60 pt-4">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-blue-800 bg-[#070d19] px-2.5 py-1 text-xs font-medium text-sky-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="proyectos" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col justify-between gap-4 border-b border-blue-900/80 pb-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                03 · Evidencias de las 10 Semanas
              </span>
              <h2 className="mt-1 flex items-center gap-2 text-3xl font-extrabold text-white">
                <FolderGit2 className="h-7 w-7 text-sky-400" />
                <span>Proyectos y Actividades</span>
              </h2>
            </div>
            <p className="text-sm text-slate-300">
              Haz clic en cualquier tarjeta para ver detalle, código y evidencias.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courseActivities.map((activity) => (
              <article
                key={activity.id}
                className="flex flex-col justify-between rounded-2xl border border-blue-900/80 bg-[#0b162c] p-6 transition hover:-translate-y-1 hover:border-sky-400/70"
              >
                <div>
                  <span className="inline-block rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">
                    {activity.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-white">{activity.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {activity.shortDescription}
                  </p>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {activity.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-blue-800 bg-[#070d19] px-2 py-0.5 text-xs text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedActivity(activity)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500/15 px-4 py-2.5 text-sm font-semibold text-sky-300 transition hover:bg-sky-500 hover:text-slate-950"
                  >
                    <span>Ver documentación y código</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="habilidades" className="scroll-mt-24 space-y-8">
          <div className="border-b border-blue-900/80 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              04 · Stack y Competencias
            </span>
            <h2 className="mt-1 flex items-center gap-2 text-3xl font-extrabold text-white">
              <Wrench className="h-7 w-7 text-sky-400" />
              <span>Habilidades</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-blue-900/70 bg-[#0b162c] p-6"
              >
                <h3 className="text-lg font-bold text-white">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-blue-800/90 bg-[#070d19] px-3 py-1.5 text-xs font-medium text-sky-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="formacion" className="scroll-mt-24 space-y-8">
          <div className="border-b border-blue-900/80 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              05 · Estudios
            </span>
            <h2 className="mt-1 flex items-center gap-2 text-3xl font-extrabold text-white">
              <GraduationCap className="h-7 w-7 text-sky-400" />
              <span>Formación Académica</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {educationList.map((edu) => (
              <div
                key={edu.title}
                className="rounded-2xl border border-blue-900/70 bg-[#0b162c] p-6"
              >
                <span className="inline-block rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">
                  {edu.period}
                </span>
                <h3 className="mt-3 text-xl font-bold text-white">{edu.title}</h3>
                <p className="text-sm font-medium text-sky-300">{edu.institution}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-blue-900/60 pt-4">
                  {edu.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-lg border border-sky-500/30 bg-sky-950/50 px-2.5 py-1 text-xs font-semibold text-sky-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="scroll-mt-24 space-y-8">
          <div className="border-b border-blue-900/80 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              06 · Hablemos
            </span>
            <h2 className="mt-1 text-3xl font-extrabold text-white">Contacto</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            <div className="space-y-4 rounded-2xl border border-blue-900/70 bg-[#0b162c] p-6 lg:col-span-5">
              <h3 className="text-xl font-bold text-white">Información directa</h3>
              <p className="text-sm leading-relaxed text-slate-300">
                ¿Tienes alguna consulta académica, oportunidad o proyecto? Escríbeme mediante el
                formulario o por mis enlaces directos.
              </p>

              <div className="space-y-3 pt-2 text-sm">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 rounded-xl border border-blue-800/80 bg-[#070d19] p-3 text-slate-200 transition hover:border-sky-400"
                >
                  <Mail className="h-4 w-4 text-sky-400" />
                  <span>{personalInfo.email}</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-blue-800/80 bg-[#070d19] p-3 text-slate-200 transition hover:border-sky-400"
                >
                  <Code2 className="h-4 w-4 text-sky-400" />
                  <span>{personalInfo.github}</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-blue-800/80 bg-[#070d19] p-3 text-slate-200 transition hover:border-sky-400"
                >
                  <Globe className="h-4 w-4 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-2xl border border-blue-900/70 bg-[#0b162c] p-6 lg:col-span-7"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-200">
                  Nombre completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  className="mt-1.5 w-full rounded-xl border border-blue-800 bg-[#070d19] px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-200">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correo@ejemplo.com"
                  className="mt-1.5 w-full rounded-xl border border-blue-800 bg-[#070d19] px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-200">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe tu mensaje (mínimo 10 caracteres)..."
                  className="mt-1.5 w-full rounded-xl border border-blue-800 bg-[#070d19] px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none"
                />
              </div>

              {feedback && (
                <div
                  className={`flex items-center gap-2 rounded-xl border p-3.5 text-sm ${
                    feedback.type === "success"
                      ? "border-emerald-500/40 bg-emerald-950/40 text-emerald-200"
                      : "border-rose-500/40 bg-rose-950/40 text-rose-200"
                  }`}
                >
                  {feedback.type === "success" ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 shrink-0 text-rose-400" />
                  )}
                  <span>{feedback.text}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-400 disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                <span>{submitting ? "Enviando..." : "Enviar mensaje"}</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="mt-20 border-t border-blue-900/70 bg-[#050912] py-8 text-center text-sm text-slate-400">
        <div className="mx-auto max-w-6xl px-4">
          <p>
            © {new Date().getFullYear()} {personalInfo.fullName} — Construido con Next.js,
            TypeScript y Tailwind CSS.
          </p>
        </div>
      </footer>

      <ActivityModal
        activity={selectedActivity}
        onClose={() => setSelectedActivity(null)}
      />
    </div>
  );
}