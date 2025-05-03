import dataJSON from "@/data.json"
import { Product } from "../types/product"

const data = JSON.parse(JSON.stringify(dataJSON)) as Product[]

export function getData() {
  console.log(data)
}

export function getProductsByCategory(slug: Product["category"]) {
  return data.filter((product) => product.category === slug)
}

export function getProductBySlug(slug: Product["slug"]): Product | undefined {
  return data.find((product) => product.slug === slug)
}

export function getProductSlugs() {
  return data.map((product) => product.slug)
}

export function getHeroProduct() {
  data.find((product) => product.new)
}
