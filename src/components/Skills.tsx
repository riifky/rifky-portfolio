import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const groups = [
  { title: "Programming & Data", items: ["Python", "SQL", "Pandas", "NumPy"] },
  {
    title: "Machine Learning",
    items: ["Scikit-learn", "Regression", "Feature engineering", "Hyperparameter tuning", "Model evaluation"],
  },
  {
    title: "Data Analytics",
    items: [
      "Power BI",
      "DAX",
      "Power Query",
      "Exploratory data analysis",
      "Data validation",
      "KPI reporting",
    ],
  },
  {
    title: "Database & Cloud",
    items: [
      "Oracle SQL",
      "PL/SQL",
      "BigQuery",
      "SQL-based investigation",
      "Google Cloud Platform fundamentals",
    ],
  },
  {
    title: "Application Support",
    items: [
      "Incident analysis",
      "Troubleshooting",
      "Root cause analysis",
      "API investigation",
      "Production data validation",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-white/10">
      <div className="mx-auto max-w-content px-5 py-24 sm:px-8">
        <SectionHeading index="04" eyebrow="Skills" title="Tools and methods I work with." id="skills-title" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 60}>
              <div className="h-full rounded-xl border border-white/10 bg-ink-800 p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-md bg-white/5 px-3 py-1.5 text-sm text-slate-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
