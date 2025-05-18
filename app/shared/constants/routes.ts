import { ProductCategory } from "../types/product"

export const routes = {
  home: () => "/" as const,
  category: (slug: ProductCategory | (string & {})) => `/category/${slug}` as const,
  product: (slug: string) => `/product/${slug}` as const,
  checkout: () => "/checkout" as const,
}
