"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { projects, type Project } from "@/config/projects";
import { isConfigured } from "@/config/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  return (
    <Reveal delay={index * 70} className={project.featured ? "md:col-span-2" : ""}>
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        className={`group flex h-full w-full flex-col rounded-xl border bg-ink-800 p-6 text-left transition-colors hover:border-accent/50 hover:bg-ink-700 sm:p-8 ${
          project.featured ? "border-accent/30" : "border-white/10"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
            {String(index + 1).padStart(2, "0")} · {project.category}
          </p>
          <ArrowUpRight
            className="h-5 w-5 shrink-0 text-slate-500 transition-colors group-hover:text-accent"
            aria-hidden="true"
          />
        </div>
        <h3 className={`mt-5 font-semibold text-white ${project.featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
          {project.title}
        </h3>
        <p className="mt-3 max-w-2xl leading-relaxed text-slate-400">{project.summary}</p>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-accent/40 px-2.5 py-1 font-mono text-[11px] text-accent">
            {project.status}
          </span>
          {project.tags.map((t) => (
            <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-400">
              {t}
            </span>
          ))}
        </div>
        <span className="mt-6 text-sm font-medium text-slate-300 group-hover:text-white">View details →</span>
      </button>
    </Reveal>
  );
}

function Detail({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-white/10 pt-5">
      <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{title}</h4>
      <div className="mt-3 text-sm leading-relaxed text-slate-300">{children}</div>
    </section>
  );
}

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    }
    if (!project && dialog.open) {
      dialog.close();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close();
      }}
      className="m-auto max-h-[88vh] w-[min(46rem,92vw)] overflow-y-auto rounded-xl border border-white/10 bg-ink-800 p-0 text-slate-300 shadow-2xl"
    >
      {project && (
        <div>
          <div className="sticky top-0 z-10 flex items-start justify-between gap-6 border-b border-white/10 bg-ink-800 px-6 pb-5 pt-6 sm:px-9 sm:pt-9">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">{project.category}</p>
              <h3 id="project-dialog-title" className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-2 font-mono text-xs text-accent">{project.status}</p>
            </div>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label="Close project details"
              className="rounded-md p-2 text-slate-400 hover:bg-white/5 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-6 px-6 pb-6 pt-6 sm:px-9 sm:pb-9">
            <Detail title="Overview">{project.overview}</Detail>
            <Detail title="Problem">{project.problem}</Detail>
            <Detail title="Approach">
              <ul className="space-y-2">
                {project.approach.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {a}
                  </li>
                ))}
              </ul>
              {project.note && (
                <p className="mt-4 rounded-md border border-white/10 bg-ink-900 p-3 text-xs text-slate-400">
                  {project.note}
                </p>
              )}
            </Detail>
            <Detail title="Technology stack">
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <li key={s} className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-300">
                    {s}
                  </li>
                ))}
              </ul>
            </Detail>
            <Detail title="Results">
              {project.results.length > 0 ? (
                <ul className="space-y-2">
                  {project.results.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-400">No verified results are published for this project.</p>
              )}
            </Detail>
            <Detail title="Links">
              <ul className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <li key={link.label}>
                    {isConfigured(link.url) ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-accent/50 px-3 py-2 text-sm text-accent hover:bg-accent/10"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ) : (
                      <span
                        aria-disabled="true"
                        title="Not configured yet. Set it in src/config/profile.ts"
                        className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-dashed border-slate-600 px-3 py-2 text-sm text-slate-500"
                      >
                        {link.label}
                        <span className="font-mono text-[10px] uppercase tracking-wider">Link soon</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Detail>
          </div>
        </div>
      )}
    </dialog>
  );
}

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = projects.find((p) => p.id === selectedId) ?? null;

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-white/10">
      <div className="mx-auto max-w-content px-5 py-24 sm:px-8">
        <SectionHeading index="03" eyebrow="Projects" title="Selected work and research." id="projects-title" />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={() => setSelectedId(project.id)} />
          ))}
        </div>
      </div>
      <ProjectDialog project={selected} onClose={() => setSelectedId(null)} />
    </section>
  );
}
