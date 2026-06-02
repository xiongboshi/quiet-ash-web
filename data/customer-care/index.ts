import type { CustomerCarePageContent } from "@/types/customer-care";
import { aboutProductsPage } from "@/data/customer-care/about-products";
import { contactPage } from "@/data/customer-care/contact";
import { exchangeReturnsPage } from "@/data/customer-care/exchange-returns";
import { generalEnquiriesPage } from "@/data/customer-care/general-enquiries";
import { helpCenterHub } from "@/data/customer-care/help-center";
import { shippingDeliveryPage } from "@/data/customer-care/shipping-delivery";
import { trackOrderPage } from "@/data/customer-care/track-order";

export { helpCenterHub };
export { shippingDeliveryPage };
export { exchangeReturnsPage };
export { trackOrderPage };
export { contactPage };
export { generalEnquiriesPage };
export { aboutProductsPage };

const customerCarePagesBySlug: Record<string, CustomerCarePageContent> = {
  delivery: shippingDeliveryPage,
  returns: exchangeReturnsPage,
  "track-order": trackOrderPage,
  contact: contactPage,
  general: generalEnquiriesPage,
  products: aboutProductsPage,
};

export function getCustomerCarePage(slug: string): CustomerCarePageContent | undefined {
  return customerCarePagesBySlug[slug];
}
