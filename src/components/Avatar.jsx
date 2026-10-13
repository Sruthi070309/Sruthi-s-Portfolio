// Original illustrated portrait (no photo needed). Colours: edit the values below.
const skin = "#D49A72";
const hair = "#1B1311";

export default function Avatar() {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="500" fill="#E4E4E0" />
      <circle cx="200" cy="240" r="150" fill="#E23744" />
      {/* long hair behind */}
      <path d="M128 215 C118 120 160 78 200 78 C250 78 286 120 272 215 L288 372 C250 392 150 392 112 372 Z" fill={hair} />
      {/* top */}
      <path d="M52 500 C56 402 118 352 200 346 C282 352 344 402 348 500 Z" fill="#111111" />
      {/* neck */}
      <path d="M170 282 L170 346 Q200 380 230 346 L230 282 Z" fill={skin} />
      {/* face */}
      <ellipse cx="200" cy="216" rx="60" ry="76" fill={skin} />
      {/* fringe, side parted */}
      <path d="M136 208 C138 130 190 106 228 118 C258 128 266 172 264 208 C240 160 190 152 136 208 Z" fill={hair} />
      {/* eyes and smile */}
      <path d="M170 222 Q180 229 190 222" stroke={hair} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M210 222 Q220 229 230 222" stroke={hair} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M184 264 Q200 276 216 264" stroke="#8A3B3B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* earrings */}
      <circle cx="140" cy="252" r="6" fill="#E9B949" />
      <circle cx="260" cy="252" r="6" fill="#E9B949" />
    </svg>
  );
}
