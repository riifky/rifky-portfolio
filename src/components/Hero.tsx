import { ArrowDown, Mail } from "lucide-react";
import { profile } from "@/config/profile";
import ConfigurableLink from "./ConfigurableLink";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative">
      <div className="mx-auto grid max-w-content items-center gap-14 px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.25fr_1fr] lg:pb-32 lg:pt-28">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {profile.name} / {profile.title}
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Building Intelligent Solutions with Data, Machine Learning &amp; Technology.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            I’m Rifky, an Informatics professional working across machine learning, data analytics, and
            enterprise application support. I enjoy turning complex data and technical problems into
            practical, reliable solutions.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-soft"
            >
              Explore My Projects
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Get in Touch
            </a>
          </div>

          <div className="mt-8 flex gap-6 text-sm text-slate-400">
            <ConfigurableLink url={profile.links.github}>GitHub</ConfigurableLink>
            <ConfigurableLink url={profile.links.linkedin}>LinkedIn</ConfigurableLink>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
