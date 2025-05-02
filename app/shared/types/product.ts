export type ProductCategory = "headphones" | "speakers" | "earphones"

export interface Product {
  id: number
  slug: string
  name: string
  image: ImageSet
  category: ProductCategory
  categoryImage: ImageSet
  new?: boolean
  price: number
  description: string
  features: string
  includes: IncludedItem[]
  gallery: Gallery
  others: RelatedProduct[]
}

export interface ImageSet {
  mobile: string
  tablet: string
  desktop: string
}

export interface IncludedItem {
  quantity: number
  item: string
}

interface Gallery {
  first: ImageSet
  second: ImageSet
  third: ImageSet
}

export interface RelatedProduct {
  slug: string
  name: string
  image: ImageSet
}
