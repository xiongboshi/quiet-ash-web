"use client";

import { useState } from "react";
import { siteFooter } from "@/data/site-footer";

export function FooterNewsletter() {
  const [email, setEmail] = useState("");

  return (
    <form
      className="site-footer__form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label className="site-footer__email-label" htmlFor="site-footer-email">
        Email address
      </label>
      <div className="site-footer__form-row">
        <input
          id="site-footer-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder={siteFooter.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="site-footer__email-input"
        />
        <button type="submit" className="site-footer__join-btn">
          {siteFooter.joinLabel}
        </button>
      </div>
    </form>
  );
}
