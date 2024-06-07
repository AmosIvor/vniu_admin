import { OrderResponse } from '@appTypes/order.type'
import { DATAS } from '@assets'
import { ContainerComponent, SpaceComponent } from '@components'
import { useState } from 'react'

const OrderDetailScreen = () => {
  const [orderItem, setOrderItem] = useState<OrderResponse>(DATAS.orderList[0])

  return (
    <ContainerComponent isBack title='Order Detail' isScroll>
      <SpaceComponent height={10} />
    </ContainerComponent>
  )
}
export default OrderDetailScreen
