import { Mail } from "lucide-react";
import { profile } from "@/config/profile";
import ConfigurableLink from "./ConfigurableLink";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-white/10">
      <div className="mx-auto max-w-content px-5 py-24 sm:px-8">
        <SectionHeading index="05" eyebrow="Contact" title="Let’s talk." id="contact-title" />
        <Reveal>
          <div className="grid gap-10 rounded-xl border border-white/10 bg-ink-800 p-8 sm:p-10 lg:grid-cols-[1.3fr_1fr]">
            <p className="max-w-xl text-lg leading-relaxed text-slate-300">
              I’m open to discussing opportunities in Data Engineering, Data Analytics, Machine Learning,
              and AI. If you have a role, a project, or a question, I’d be glad to hear from you.
            </p>
            <div className="space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-soft"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {profile.email}
              </a>
              <div className="flex gap-6 text-sm text-slate-400">
                <ConfigurableLink url={profile.links.linkedin}>LinkedIn</ConfigurableLink>
                <ConfigurableLink url={profile.links.github}>GitHub</ConfigurableLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
