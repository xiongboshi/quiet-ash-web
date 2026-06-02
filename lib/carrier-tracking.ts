export type TrackingCarrier = "fedex" | "dhl" | "usps" | "ups";

export const TRACKING_CARRIERS: { id: TrackingCarrier; label: string }[] = [
  { id: "fedex", label: "FedEx" },
  { id: "dhl", label: "DHL" },
  { id: "usps", label: "USPS" },
  { id: "ups", label: "UPS" },
];

/** Opens the carrier's public tracking page with the given number. */
export function buildCarrierTrackingUrl(
  carrier: TrackingCarrier,
  trackingNumber: string,
): string {
  const n = encodeURIComponent(trackingNumber.trim());
  switch (carrier) {
    case "fedex":
      return `https://www.fedex.com/fedextrack/?trknbr=${n}`;
    case "dhl":
      return `https://www.dhl.com/global-en/home/tracking/tracking-express.html?submit=1&tracking-id=${n}`;
    case "usps":
      return `https://tools.usps.com/go/TrackConfirmAction?tLabels=${n}`;
    case "ups":
      return `https://www.ups.com/track?tracknum=${n}`;
    default:
      return `https://www.fedex.com/fedextrack/?trknbr=${n}`;
  }
}
