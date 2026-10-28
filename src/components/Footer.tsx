import { profile } from "@/config/profile";
import ConfigurableLink from "./ConfigurableLink";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">{profile.name}</p>
          <p className="mt-1 max-w-md text-sm text-slate-500">{profile.tagline}</p>
        </div>
        <div className="flex gap-6 text-sm text-slate-400">
          <ConfigurableLink url={profile.links.github}>GitHub</ConfigurableLink>
          <ConfigurableLink url={profile.links.linkedin}>LinkedIn</ConfigurableLink>
        </div>
        <p className="text-sm text-slate-500">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
