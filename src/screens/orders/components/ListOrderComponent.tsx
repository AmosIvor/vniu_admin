import { OrderResponse } from '@appTypes/order.type'
import { appColors } from '@constants'
import { OrderItemComponent } from '@screens/orders/components'
import { FlatList } from 'react-native'

interface Props {
  items: OrderResponse[]
}

const ListOrderComponent = (props: Props) => {
  const { items } = props

  return (
    <FlatList
      numColumns={1}
      data={items}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <OrderItemComponent item={item} key={item.orderId} styles={{ padding: 10, backgroundColor: '#FFF7FC' }} />
      )}
    />
  )
}
export default ListOrderComponent
