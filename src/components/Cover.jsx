// Typographic cover art for each project (no screenshots needed)
const shapes = {
  circle: <><circle cx="150" cy="52" r="46" fill="currentColor" opacity=".16" /><circle cx="150" cy="52" r="22" fill="currentColor" opacity=".3" /></>,
  bars: <>{[0, 1, 2, 3, 4].map((i) => <rect key={i} x={80 + i * 24} y={100 - (i + 1) * 16} width="16" height={(i + 1) * 16} fill="currentColor" opacity=".28" />)}</>,
  grid: <>{[0, 1, 2].flatMap((r) => [0, 1, 2, 3].map((c) => <rect key={r + "-" + c} x={90 + c * 26} y={16 + r * 26} width="20" height="20" fill="currentColor" opacity={(r + c) % 2 ? 0.14 : 0.32} />))}</>,
  arc: <path d="M70 112 A70 70 0 0 1 200 36" stroke="currentColor" strokeWidth="14" fill="none" opacity=".3" />,
  dots: <>{[0, 1, 2, 3, 4, 5].flatMap((r) => [0, 1, 2, 3, 4, 5, 6].map((c) => <circle key={r + "-" + c} cx={72 + c * 20} cy={14 + r * 18} r="4" fill="currentColor" opacity=".3" />))}</>,
  wave: <path d="M30 70 Q 65 20 100 70 T 170 70 T 240 70" stroke="currentColor" strokeWidth="12" fill="none" opacity=".28" />,
  lines: <>{[0, 1, 2, 3, 4, 5].map((i) => <rect key={i} x="80" y={12 + i * 17} width={50 + (i % 3) * 35} height="8" fill="currentColor" opacity=".28" />)}</>,
};

export default function Cover({ project }) {
  return (
    <div className="cover" style={{ background: project.bg, color: project.fg }}>
      <div className="cover-inner">
        <svg className="cover-shape" viewBox="0 0 240 120" aria-hidden="true">{shapes[project.shape]}</svg>
        <span className="cover-mark">{project.mark}</span>
      </div>
    </div>
  );
}
