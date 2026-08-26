'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <label htmlFor="email">Email <span>(required)</span></label>
      <input id="email" name="email" type="email" autoComplete="email" required />
      <label className="check-row"><input name="updates" type="checkbox" /><span>Sign up for news and updates</span></label>
      <label htmlFor="message">Message <span>(required)</span></label>
      <textarea id="message" name="message" rows={6} required />
      <button type="submit">Email Me</button>
      {sent && <p className="form-note" role="status">Thanks — your message has been prepared.</p>}
    </form>
  );
}
