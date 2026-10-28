import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  project?: string;
  description: string;
  points?: string[];
};

const roles: Role[] = [
  {
    title: "L2 Support Application",
    company: "PT Integrasi Logistik Cipta Solusi",
    location: "Jakarta",
    period: "May 2026 – Present",
    current: true,
    description:
      "Support enterprise applications used in port operations and vessel services by investigating production incidents, tracing application logic, analyzing SQL queries, and validating application data against business processes.",
  },
  {
    title: "Machine Learning Engineer (Project-Based / Contract)",
    company: "PT Mata Elang Strategic",
    location: "Balikpapan",
    period: "November 2025 – February 2026",
    project: "Vessel Fuel Consumption Prediction for Pertamina Hulu Kalimantan Timur",
    description:
      "Developed a machine learning model to predict vessel fuel consumption to support evaluation and decision-making for vessel fuel requirements.",
    points: [
      "Data cleaning and preprocessing using Python, Pandas, and NumPy.",
      "Feature engineering and model optimization using Scikit-learn.",
      "Evaluated model performance using MAE, RMSE, and R².",
      "Improved the reported R² score from 0.89 to 0.96.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-white/10">
      <div className="mx-auto max-w-content px-5 py-24 sm:px-8">
        <SectionHeading index="02" eyebrow="Experience" title="Where I’ve applied the work." id="experience-title" />

        <ol className="relative space-y-12 border-l border-white/10 pl-8 sm:pl-10">
          {roles.map((role) => (
            <li key={role.title} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[37px] top-2 h-3 w-3 rounded-full border-2 sm:-left-[45px] ${
                  role.current ? "border-accent bg-accent" : "border-slate-500 bg-ink-900"
                }`}
              />
              <Reveal>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-semibold text-white">{role.title}</h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">{role.period}</p>
                </div>
                <p className="mt-1 text-slate-400">
                  {role.company} · {role.location}
                </p>
                {role.project && (
                  <p className="mt-4 text-sm text-slate-300">
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-500">Project </span>
                    {role.project}
                  </p>
                )}
                <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">{role.description}</p>
                {role.points && (
                  <ul className="mt-4 max-w-3xl space-y-2 text-sm text-slate-400">
                    {role.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
