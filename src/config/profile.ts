/**
 * Central profile configuration.
 *
 * Everything personal or link-related lives here. Leave a URL as an empty
 * string ("") and the site shows a clearly marked, non-clickable placeholder
 * instead of a broken link. Never put secrets in this file: it ships to the
 * browser.
 */

export const profile = {
  name: "Rifky",
  title: "Data & AI Professional",
  tagline: "Turning complex data and technical problems into practical, reliable solutions.",
  email: "riifky0@gmail.com",

  /** Optional: set NEXT_PUBLIC_SITE_URL in Vercel for correct social/SEO URLs. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",

  links: {
    /** e.g. "https://github.com/your-username" */
    github: "",
    /** e.g. "https://www.linkedin.com/in/your-profile" */
    linkedin: "",
    /**
     * Path to a CV file placed in /public, e.g. "/cv/rifky-cv.pdf".
     * Leave empty until a real file exists.
     */
    cv: "",
  },

  education: {
    degree: "Bachelor’s degree in Informatics",
    school: "Universitas Nasional",
    gpa: "3.88 / 4.00",
  },

  publication: {
    title:
      "Performance Analysis of Facial Expression Recognition by Using Geometry Augmentation and Random Oversampling for CNN Model",
    venue: "IEEE ICSCC 2024",
    /** DOI or IEEE Xplore URL. Left blank on purpose: do not guess it. */
    url: "",
  },

  /** Per-project links. Empty string = placeholder shown on the site. */
  projectLinks: {
    vesselFuelAi: {
      github: "",
      demo: "",
    },
    vesselFuelPrediction: {
      github: "",
    },
    powerBiDashboard: {
      github: "",
    },
    facialExpression: {
      github: "",
      publication: "",
    },
  },
} as const;

/** True when a link value is a usable, non-empty URL/path. */
export function isConfigured(value: string | undefined | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
