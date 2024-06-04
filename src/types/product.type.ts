export interface ProductItem {
  productItemId: number
  productId: number
  colourId: number
  originalPrice: number
  salePrice: number
  productItemSold: number
  productItemRating: number
  productItemCode: number
  product?: Product
  productImages: ProductImage[]
}

export interface Product {
  productId: number
  productName: string
  productDescription?: string
  productCategoryId: number
  productItems?: ProductItem[]
}

export interface ProductImage {
  productImageId: number
  productImageUrl: string
  productItemId: number
  productItem?: ProductItem
}
