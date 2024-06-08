import { ProductItem } from './product.type'

export interface OrderResponse {
  orderId: number
  orderCreateAt: string
  orderUpdateAt: string
  orderTotal: number
  orderNote: string
  orderStatusId: number
  shippingMethodId: number
  promotionId?: number
  address: string
  username: string
  numberPhone: string
  paymentMethodId: number
  userId: string
  orderLines: OrderLine[]
}

export interface OrderLine {
  orderLineId?: number
  quantity: number
  price: number
  orderId: number
  productItemId: number
  productItem?: ProductItem
  variationId: number
}

export interface OrderRequest {
  orderCreateAt: string
  orderUpdateAt: string
  orderTotal: number
  orderNote: string
  orderStatusId: number // default 1
  shippingMethodId: number
  promotionId?: number
  address: string
  username: string
  numberPhone: string
  paymentMethodId?: number
  userId: string
}
