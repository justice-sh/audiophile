import dataJSON from "@/data.json"
import { Product } from "../types/product"

const data = (JSON.parse(JSON.stringify(dataJSON)) as Product[]).map(fixImage)

// export function getData() {
//   console.log(data)
// }

function fixImage(product: Product): Product {
  product.image = {
    desktop: product.image.desktop.replace("./", "/"),
    tablet: product.image.tablet.replace("./", "/"),
    mobile: product.image.mobile.replace("./", "/"),
  }

  product.categoryImage = {
    desktop: product.categoryImage.desktop.replace("./", "/"),
    tablet: product.categoryImage.tablet.replace("./", "/"),
    mobile: product.categoryImage.mobile.replace("./", "/"),
  }

  return product
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

// export function getHeroProduct() {
//   data.find((product) => product.new)
// }
