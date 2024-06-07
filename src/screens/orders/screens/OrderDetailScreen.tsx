import { OrderResponse } from '@appTypes/order.type'
import { DATAS } from '@assets'
import {
  CardComponent,
  ContainerComponent,
  RowComponent,
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
    <ContainerComponent isBack title={`Order #${route.params.id}`} isScroll>
      <SpaceComponent height={10} />
      <StepIndicatorComponent />

      <SpaceComponent height={20} />

      <SectionComponent styles={{ paddingBottom: 2 }}>
        <TextComponent text='Products' font={appFonts.medium} color={appColors.text} size={19} />
      </SectionComponent>

      <SectionComponent styles={{ paddingHorizontal: 8 }}>
        <ListProductOrderedComponent items={orderItem.orderLines} />
        <SpaceComponent height={8} />
        <RowComponent styles={{ paddingHorizontal: 8 }} justify='flex-end'>
          <TextComponent text='Total:   50 $' font={appFonts.medium} color={appColors.primary} size={19} />
        </RowComponent>
      </SectionComponent>

      <SectionComponent styles={{ paddingBottom: 2 }}>
        <TextComponent text='Customer Information' font={appFonts.medium} color={appColors.text} size={19} />
      </SectionComponent>

      <SectionComponent styles={{ paddingHorizontal: 8 }}>
        <OrderInformationComponent styles={{ padding: 16 }} />

        <TextComponent text='Hello' flex={1} />
      </SectionComponent>
    </ContainerComponent>
  )
}
export default OrderDetailScreen
