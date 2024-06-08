import { OrderLine, OrderRequest, OrderResponse } from '@appTypes/order.type'
import { SuccessResponse } from '@appTypes/utils.type'
import { http } from '@utils'

const orderApi = {
  createOrder({ paymentType, body }: { paymentType: number; body: OrderRequest }) {
    return http.post<SuccessResponse<OrderResponse>>(`api/Order/${paymentType}`, body)
  },
  createOrderLine(body: OrderLine) {
    return http.post<SuccessResponse<OrderLine>>(`api/OrderLine`, body)
  }
}

export default orderApi
