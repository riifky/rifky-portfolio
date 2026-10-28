/**
 * Abstract data-pipeline visual: raw data -> features -> model -> insight,
 * with a small fitted-line plot. Purely decorative, so hidden from assistive tech.
 */
export default function HeroVisual() {
  const nodes = [
    { x: 40, label: "DATA" },
    { x: 150, label: "CLEAN" },
    { x: 260, label: "FEATURES" },
    { x: 370, label: "MODEL" },
  ];
  const points = [
    [34, 168],
    [62, 150],
    [88, 154],
    [118, 128],
    [146, 124],
    [176, 100],
    [206, 96],
    [236, 74],
    [268, 70],
    [296, 52],
  ];
  const line = points.map((p) => p.join(",")).join(" ");

  return (
    <svg
      viewBox="0 0 420 380"
      role="img"
      aria-hidden="true"
      className="h-auto w-full max-w-md"
      fill="none"
    >
      {/* pipeline */}
      <line x1="48" y1="46" x2="372" y2="46" stroke="#38bdf8" strokeOpacity="0.55" className="flow-line" />
      {nodes.map((n) => (
        <g key={n.label}>
          <rect
            x={n.x}
            y="30"
            width="16"
            height="32"
            rx="3"
            fill="#0b1220"
            stroke="#38bdf8"
            strokeOpacity="0.7"
          />
          <text
            x={n.x + 8}
            y="86"
            textAnchor="middle"
            fontSize="9"
            letterSpacing="1.5"
            fill="#94a3b8"
            fontFamily="ui-monospace, monospace"
          >
            {n.label}
          </text>
        </g>
      ))}

      {/* chart panel */}
      <rect x="10" y="120" width="400" height="250" rx="10" fill="#101a2e" stroke="#ffffff" strokeOpacity="0.1" />
      <text x="28" y="148" fontSize="10" letterSpacing="1.5" fill="#94a3b8" fontFamily="ui-monospace, monospace">
        ACTUAL VS. PREDICTED
      </text>
      <text x="392" y="148" textAnchor="end" fontSize="9" letterSpacing="1.5" fill="#64748b" fontFamily="ui-monospace, monospace">
        ILLUSTRATIVE
      </text>
      <g transform="translate(40 150) scale(1.0)">
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1="0" x2="330" y1={20 + i * 48} y2={20 + i * 48} stroke="#ffffff" strokeOpacity="0.06" />
        ))}
        <line x1="0" y1="176" x2="330" y2="30" stroke="#38bdf8" strokeOpacity="0.7" strokeDasharray="5 5" />
        <polyline points={line} stroke="#e2e8f0" strokeOpacity="0.8" strokeWidth="1.5" strokeLinejoin="round" />
        {points.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="#0b1220" stroke="#38bdf8" />
        ))}
      </g>

      {/* metric chips, labels only (no invented values) */}
      {["MAE", "RMSE", "R²"].map((m, i) => (
        <g key={m} transform={`translate(${28 + i * 64} 336)`}>
          <rect width="54" height="22" rx="4" fill="#0b1220" stroke="#ffffff" strokeOpacity="0.12" />
          <text x="27" y="15" textAnchor="middle" fontSize="10" fill="#cbd5e1" fontFamily="ui-monospace, monospace">
            {m}
          </text>
        </g>
      ))}
    </svg>
  );
}
