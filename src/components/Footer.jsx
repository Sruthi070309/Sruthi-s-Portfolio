import { Link } from "react-router-dom";
import { profile } from "../data/profile.js";
import { navItems } from "./Navbar.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-name">{profile.name}<i>.</i></p>
          <p className="muted">{profile.role}, {profile.city}</p>
        </div>
        <nav aria-label="Footer"><ul>{navItems.map(([to, label]) => <li key={to}><Link to={to}>{label}</Link></li>)}</ul></nav>
        <ul>
          <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
          <li><a href={"mailto:" + profile.email}>Email</a></li>
        </ul>
      </div>
      <p className="wrap copy">© 2026 {profile.name}. All rights reserved.</p>
    </footer>
  );
}
