import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/config/profile";

const description =
  "Portfolio of Rifky, an Informatics graduate working across machine learning, data analytics, SQL, and enterprise application support in maritime and port operations.";

export const metadata: Metadata = {
  ...(profile.siteUrl ? { metadataBase: new URL(profile.siteUrl) } : {}),
  title: {
    default: "Rifky | Data & AI Professional",
    template: "%s | Rifky",
  },
  description,
  keywords: [
    "Rifky",
    "Machine Learning",
    "Data Analytics",
    "SQL",
    "Power BI",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: "Rifky | Data & AI Professional",
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Rifky | Data & AI Professional",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-ink-950"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
