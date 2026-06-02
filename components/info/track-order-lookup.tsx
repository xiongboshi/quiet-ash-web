"use client";

import { useId, useState } from "react";
import {
  TRACKING_CARRIERS,
  buildCarrierTrackingUrl,
  type TrackingCarrier,
} from "@/lib/carrier-tracking";
import { CUSTOMER_CARE_EMAIL } from "@/data/customer-care/shared";

export function TrackOrderLookup() {
  const formId = useId();
  const [trackingNumber, setTrackingNumber] = useState("");
  const [carrier, setCarrier] = useState<TrackingCarrier>("fedex");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = trackingNumber.trim();
    if (!trimmed) {
      setError("Please enter your shipping tracking number.");
      return;
    }
    setError(null);
    const url = buildCarrierTrackingUrl(carrier, trimmed);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="track-order-lookup"
      aria-labelledby={`${formId}-heading`}
    >
      <form
        id={formId}
        className="track-order-lookup__form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="track-order-lookup__field">
          <label htmlFor={`${formId}-number`}>
            Shipping tracking number <span aria-hidden>*</span>
          </label>
          <input
            id={`${formId}-number`}
            name="trackingNumber"
            type="text"
            required
            autoComplete="off"
            spellCheck={false}
            placeholder="Enter tracking number"
            value={trackingNumber}
            onChange={(e) => {
              setTrackingNumber(e.target.value);
              if (error) setError(null);
            }}
            aria-invalid={error ? true : undefined}
            aria-describedby={
              error ? `${formId}-error` : `${formId}-footnote`
            }
          />
        </div>

        {error ? (
          <p id={`${formId}-error`} className="track-order-lookup__error" role="alert">
            {error}
          </p>
        ) : null}

        <button type="submit" className="track-order-lookup__submit">
          Track order
        </button>

        <fieldset className="track-order-lookup__carriers">
          <legend>Select carrier manually</legend>
          <ul className="track-order-lookup__carrier-list">
            {TRACKING_CARRIERS.map((item) => (
              <li key={item.id}>
                <label className="track-order-lookup__carrier-option">
                  <input
                    type="radio"
                    name="carrier"
                    value={item.id}
                    checked={carrier === item.id}
                    onChange={() => setCarrier(item.id)}
                  />
                  <span>{item.label}</span>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
      </form>

      <p id={`${formId}-footnote`} className="track-order-lookup__footnote">
        Your shipping tracking number is in your order confirmation or shipping
        confirmation email. If you have trouble tracking your parcel, contact us
        at{" "}
        <a href={`mailto:${CUSTOMER_CARE_EMAIL}`}>{CUSTOMER_CARE_EMAIL}</a>.
      </p>
    </section>
  );
}
