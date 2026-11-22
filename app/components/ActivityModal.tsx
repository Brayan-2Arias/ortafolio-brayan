"use client";

import React, { useEffect } from "react";
import { X, Code2, CheckCircle2, Target, AlertCircle, Cpu, ExternalLink } from "lucide-react";
import { ActivityDetail } from "../data/portfolioData";

interface ActivityModalProps {
  activity: ActivityDetail | null;
  onClose: () => void;
}

export default function ActivityModal({ activity, onClose }: ActivityModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (activity) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activity, onClose]);

  if (!activity) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-sky-500/30 bg-[#0b162c] p-6 text-white shadow-2xl md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-blue-900/80 pb-5">
          <div>
            <span className="inline-block rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-sky-300">
              {activity.tag}
            </span>
            <h3 id="modal-title" className="mt-2 text-2xl font-bold text-white md:text-3xl">
              {activity.title}
            </h3>
            <p className="mt-1 text-sm text-slate-300">{activity.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar ventana"
            className="rounded-xl border border-blue-800 bg-blue-950/70 p-2 text-slate-300 transition hover:border-sky-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 space-y-6 text-sm leading-relaxed text-slate-200">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-blue-900/70 bg-[#070d19] p-4">
              <div className="flex items-center gap-2 font-semibold text-sky-300">
                <AlertCircle className="h-4 w-4" />
                <span>Problema</span>
              </div>
              <p className="mt-2 text-slate-300">{activity.problem}</p>
            </div>

            <div className="rounded-xl border border-blue-900/70 bg-[#070d19] p-4">
              <div className="flex items-center gap-2 font-semibold text-sky-300">
                <Target className="h-4 w-4" />
                <span>Objetivo</span>
              </div>
              <p className="mt-2 text-slate-300">{activity.objective}</p>
            </div>
          </div>

          <div className="rounded-xl border border-blue-900/70 bg-[#070d19] p-4">
            <div className="flex items-center gap-2 font-semibold text-sky-300">
              <Cpu className="h-4 w-4" />
              <span>Solución Implementada</span>
            </div>
            <p className="mt-2 text-slate-300">{activity.solution}</p>
          </div>

          <div className="rounded-xl border border-blue-900/70 bg-[#070d19] p-4">
            <div className="flex items-center gap-2 font-semibold text-sky-300">
              <CheckCircle2 className="h-4 w-4" />
              <span>Resultados Obtenidos</span>
            </div>
            <ul className="mt-2 space-y-2 text-slate-300">
              {activity.results.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-sky-300">
              <Code2 className="h-4 w-4" />
              <span>Código Fuente / Estructura</span>
            </div>
            <pre className="overflow-x-auto rounded-xl border border-blue-800/80 bg-[#050912] p-4 font-mono text-xs leading-6 text-sky-100">
              <code>{activity.codeSnippet}</code>
            </pre>
          </div>

          <div className="rounded-xl border border-sky-500/20 bg-sky-950/30 p-4 text-xs text-sky-200">
            <strong>Evidencia del trabajo:</strong> {activity.evidenceNote}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex flex-wrap gap-2">
              {activity.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-blue-800 bg-blue-950/80 px-2.5 py-1 text-xs font-medium text-sky-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {activity.repoUrl && (
              <a
                href={activity.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                <span>Ver en GitHub</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}