export const routes = {
  home: () => "/" as const,
  category: (slug: CategorySlog) => `/category/${slug}` as const,
  product: (slug: string) => `/product/${slug}` as const,
}

type CategorySlog = "headphones" | "speakers" | "earphones"
