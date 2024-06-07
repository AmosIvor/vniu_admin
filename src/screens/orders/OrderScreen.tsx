import { OrderResponse } from '@appTypes/order.type'
import { DATAS } from '@assets'
import { ContainerComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '@components'
import { appColors } from '@constants'
import { ListOrderComponent } from '@screens/orders/components'
import { Notification, SearchNormal, Sort } from 'iconsax-react-native'
import { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { globalStyles } from 'src/styles/globalStyles'

const OrderScreen = ({ navigation }: any) => {
  const [orderListData, setOrderListData] = useState<OrderResponse[]>([])

  useEffect(() => {
    setOrderListData(DATAS.orderList)
  }, [])

  return (
    <ContainerComponent title='Orders' icon={<Notification size='24' color={appColors.Primary} />}>
      {/* button search */}
      <SectionComponent styles={{ paddingBottom: 10 }}>
        <RowComponent>
          <RowComponent
            styles={[{ flex: 1 }, globalStyles.inputContainer]}
            onPress={() =>
              navigation.navigate('OrderNavigator', { screen: 'OrderSearchScreen', params: { isFilter: false } })
            }
          >
            <SearchNormal size={20} color={appColors.text} />
            <SpaceComponent width={10} />
            <TextComponent color={'rgba(0, 0, 0, 0.4)'} text='Search...' size={15} flex={1} />
          </RowComponent>

          <SpaceComponent width={16} />

          <TouchableOpacity
            style={{
              borderRadius: 12,
              minHeight: 44,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: appColors.black
            }}
            onPress={() =>
              navigation.navigate('OrderNavigator', {
                screen: 'OrderSearchScreen',
                params: { isFilter: true }
              })
            }
          >
            <Sort size={24} color={appColors.primary} />
          </TouchableOpacity>
        </RowComponent>
        <SpaceComponent height={8} />

        <TextComponent text='Found 10 items' size={14} color={'rgba(0, 0, 0, 0.4)'} />
      </SectionComponent>

      {/* order list */}
      <SectionComponent styles={{ paddingHorizontal: 8, paddingBottom: 6, flex: 1 }}>
        <ListOrderComponent items={orderListData} />
      </SectionComponent>
    </ContainerComponent>
  )
}
export default OrderScreen
