/**
 * Product catalog facade — objects live as JSON under `data/products/<category>/*.json`.
 * Import from here (or `@/lib/catalog`) so a future CMS can replace one module.
 */
export type { CatalogProduct } from "@/lib/catalog";
export {
  formatProductCategoryLabel,
  getAllProducts,
  getFeaturedForHome,
  getFeaturedProducts,
  getProductBySlug,
  getProductCategorySlugs,
  getProductsForSeries,
  getProductsInCategory,
  getRelatedProductsForEssay,
} from "@/lib/catalog";
