export default function Marquee({ items }) {
  const group = items.concat(items);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <div className="marquee-group" key={k}>
            {group.map((t, i) => (<span key={i}>{t}<b>•</b></span>))}
          </div>
        ))}
      </div>
    </div>
  );
}
