export default function SectionHeading({ num, title, children }) {
  return (
    <div className="sh">
      <span className="sh-num">{num}</span>
      <h2>{title}</h2>
      <div className="sh-side">{children}</div>
    </div>
  );
}
