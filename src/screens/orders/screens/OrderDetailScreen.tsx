import { OrderResponse } from '@appTypes/order.type'
import { DATAS } from '@assets'
import {
  ButtonComponent,
  ContainerComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  StepIndicatorComponent,
  TextComponent
} from '@components'
import { appColors, appFonts } from '@constants'
import { ModalAlert } from '@modals'
import { ListProductOrderedComponent, OrderInformationComponent } from '@screens/orders/components'
import { useState } from 'react'

const OrderDetailScreen = ({ navigation, route }: any) => {
  const [orderItem, setOrderItem] = useState<OrderResponse>(DATAS.orderList[0])
  const [currentPosition, setCurrentPosition] = useState(0)
  const [isShowModal, setIsShowModal] = useState(false)

  const handleUpdateOrderStatus = () => {
    setIsShowModal(false)
    setCurrentPosition((prev) => prev + 1)
  }

  return (
    <ContainerComponent isBack title={`Order #${route.params.id}`} isScroll>
      <SpaceComponent height={10} />
      <StepIndicatorComponent currentPosition={currentPosition} />

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
      </SectionComponent>

      <SectionComponent>
        <RowComponent justify='space-between'>
          <TextComponent text='Payment Method' font={appFonts.medium} color={appColors.text} size={19} />
          <TextComponent text='VNPAY' font={appFonts.medium} color={appColors.primary} size={19} />
        </RowComponent>
      </SectionComponent>

      <SectionComponent>
        <ButtonComponent
          type='primary'
          text={currentPosition === 4 ? 'Order Completed' : 'Update Order Status'}
          onPress={() => setIsShowModal(true)}
          isDisable={currentPosition === 4}
        />
      </SectionComponent>
      <ModalAlert
        isVisible={isShowModal}
        orderStatus={currentPosition}
        setIsVisible={setIsShowModal}
        handleSubmit={handleUpdateOrderStatus}
      />
    </ContainerComponent>
  )
}
export default OrderDetailScreen
