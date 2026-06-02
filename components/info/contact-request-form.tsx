"use client";

import { useState } from "react";
import type { ContactRequestTopic } from "@/types/customer-care";
import { CUSTOMER_CARE_EMAIL } from "@/data/customer-care/shared";

const TOPICS: { value: ContactRequestTopic; label: string }[] = [
  { value: "shipping", label: "Shipping and delivery" },
  { value: "exchange-return", label: "Exchange or return" },
  { value: "cancel-order", label: "Cancel my order" },
  { value: "product-help", label: "Help finding a product" },
  { value: "track-order", label: "Track my order" },
  { value: "general", label: "Other general enquiry" },
];

type Props = {
  className?: string;
};

export function ContactRequestForm({ className }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [topic, setTopic] = useState<ContactRequestTopic>("general");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `[Quiet Ash] ${TOPICS.find((t) => t.value === topic)?.label ?? "Enquiry"}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        orderNumber ? `Order number: ${orderNumber}` : null,
        `Topic: ${TOPICS.find((t) => t.value === topic)?.label}`,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    );
    window.location.href = `mailto:${CUSTOMER_CARE_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      className={["customer-care-form", className].filter(Boolean).join(" ")}
      onSubmit={handleSubmit}
      aria-labelledby="contact-form-heading"
    >
      <h2 id="contact-form-heading" className="customer-care__heading">
        Submit a request
      </h2>
      <p className="customer-care-form__note">
        This opens your email app with your message addressed to {CUSTOMER_CARE_EMAIL}.
      </p>

      <div className="customer-care-form__field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="customer-care-form__field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="customer-care-form__field">
        <label htmlFor="contact-order">Order number (optional)</label>
        <input
          id="contact-order"
          name="orderNumber"
          type="text"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
        />
      </div>

      <div className="customer-care-form__field">
        <label htmlFor="contact-topic">Topic</label>
        <select
          id="contact-topic"
          name="topic"
          required
          value={topic}
          onChange={(e) => setTopic(e.target.value as ContactRequestTopic)}
        >
          {TOPICS.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div className="customer-care-form__field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button type="submit" className="customer-care-form__submit">
        Send via email
      </button>
    </form>
  );
}
