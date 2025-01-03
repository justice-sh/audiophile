export const routes = {
  home: () => "/" as const,
  category: (slug: string) => `/category/${slug}` as const,
}
