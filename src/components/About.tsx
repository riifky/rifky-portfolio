import { BarChart3, BrainCircuit, Database, GraduationCap, Ship, Wrench } from "lucide-react";
import { profile } from "@/config/profile";
import ConfigurableLink from "./ConfigurableLink";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    icon: BrainCircuit,
    title: "Machine learning",
    text: "Model development, feature engineering, and evaluation with Python and Scikit-learn.",
  },
  {
    icon: BarChart3,
    title: "Data analytics",
    text: "Dashboard reporting and data shaping with Power BI, Power Query, and DAX.",
  },
  {
    icon: Database,
    title: "SQL investigation",
    text: "Relational database investigation and query analysis, including Oracle SQL.",
  },
  {
    icon: Wrench,
    title: "Production support",
    text: "Troubleshooting enterprise applications and validating data against business processes.",
  },
  {
    icon: Ship,
    title: "Maritime domain",
    text: "Exposure to maritime and port operations through project and support work.",
  },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-white/10">
      <div className="mx-auto max-w-content px-5 py-24 sm:px-8">
        <SectionHeading index="01" eyebrow="About" title="A practical mix of data, ML, and production experience." id="about-title" />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="text-lg leading-relaxed text-slate-300">
              I’m an Informatics graduate who works where machine learning, analytics, and real
              operational systems meet. My work ranges from building and evaluating prediction models to
              tracing application logic and checking production data in port and vessel-service systems.
            </p>

            <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {pillars.map(({ icon: Icon, title, text }) => (
                <li key={title} className="bg-ink-800 p-5 sm:last:odd:col-span-2">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  <h3 className="mt-3 text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{text}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="space-y-6">
            <div className="rounded-xl border border-white/10 bg-ink-800 p-6">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">Education</h3>
              </div>
              <p className="mt-4 text-lg font-medium text-white">{profile.education.degree}</p>
              <p className="text-slate-400">{profile.education.school}</p>
              <p className="mt-3 font-mono text-sm text-accent">GPA {profile.education.gpa}</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-ink-800 p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">Publication</h3>
              <p className="mt-4 leading-relaxed text-white">
                <ConfigurableLink
                  url={profile.publication.url}
                  placeholderHint="Publication URL not configured yet. Set it in src/config/profile.ts"
                  className="items-start text-left"
                >
                  <span>“{profile.publication.title}”</span>
                </ConfigurableLink>
              </p>
              <p className="mt-3 text-sm text-slate-400">Published at {profile.publication.venue}.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
