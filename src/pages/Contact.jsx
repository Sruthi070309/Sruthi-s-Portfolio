import { useState } from "react";
import { profile } from "../data/profile.js";
import Button from "../components/Button.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // No server needed: this opens your email app with the message filled in
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio message from " + form.name);
    const body = encodeURIComponent(form.message + "\n\n" + form.name + " (" + form.email + ")");
    window.location.href = "mailto:" + profile.email + "?subject=" + subject + "&body=" + body;
    setSent(true);
  };

  return (
    <section className="wrap section contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="big">Let's work together<em>.</em></h1>
        <p className="lead">Looking for a Java full stack developer for an internship or entry-level role, or have an idea you want built? Send a message and I'll reply soon.</p>
        <dl className="details">
          <div><dt>Email</dt><dd><a href={"mailto:" + profile.email}>{profile.email}</a></dd></div>
          <div><dt>LinkedIn</dt><dd><a href={profile.linkedin} target="_blank" rel="noreferrer">sruthisundar2509</a></dd></div>
          <div><dt>GitHub</dt><dd><a href={profile.github} target="_blank" rel="noreferrer">Sruthi070309</a></dd></div>
          <div><dt>Based in</dt><dd>{profile.city}</dd></div>
        </dl>
      </div>

      <form className="form" onSubmit={submit}>
        <label>Name<input name="name" value={form.name} onChange={change} required autoComplete="name" /></label>
        <label>Email<input type="email" name="email" value={form.email} onChange={change} required autoComplete="email" /></label>
        <label>Message<textarea name="message" rows="5" value={form.message} onChange={change} required /></label>
        <Button type="submit">Send message</Button>
        {sent && <p className="note" role="status">Your email app should open with the message ready to send.</p>}
      </form>
    </section>
  );
}
