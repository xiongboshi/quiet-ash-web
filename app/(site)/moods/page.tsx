import { redirect } from "next/navigation";
import { SHOP_INDEX } from "@/lib/site-paths";

/** Legacy mood index — no longer linked in nav; send visitors to shop. */
export default function MoodsRoutePage() {
  redirect(SHOP_INDEX);
}
