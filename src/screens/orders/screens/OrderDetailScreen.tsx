import { OrderResponse } from '@appTypes/order.type'
import { DATAS } from '@assets'
import {
  ContainerComponent,
  SectionComponent,
  SpaceComponent,
  StepIndicatorComponent,
  TextComponent
} from '@components'
import { appColors, appFonts } from '@constants'
import { useEffect, useState } from 'react'
import { ListProductOrderedComponent, OrderInformationComponent } from '@screens/orders/components'

const OrderDetailScreen = ({ navigation, route }: any) => {
  const [orderItem, setOrderItem] = useState<OrderResponse>(DATAS.orderList[0])

  return (
    <ContainerComponent isBack title={`Order #${route.params.id}`}>
      <SpaceComponent height={10} />
      <StepIndicatorComponent />

      <SpaceComponent height={20} />

      <SectionComponent styles={{ paddingBottom: 10 }}>
        <TextComponent text='Products' font={appFonts.medium} color={appColors.text} size={19} />
      </SectionComponent>

      <SectionComponent styles={{ paddingHorizontal: 8 }}>
        <ListProductOrderedComponent items={orderItem.orderLines} />
      </SectionComponent>

      <SectionComponent>
        <OrderInformationComponent />
      </SectionComponent>
    </ContainerComponent>
  )
}
export default OrderDetailScreen
