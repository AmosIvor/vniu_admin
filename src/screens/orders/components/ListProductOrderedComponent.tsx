import { OrderLine } from '@appTypes/order.type'
import { ProductOrderedComponent } from '@screens/orders/components'
import { FlatList } from 'react-native'

interface Props {
  items: OrderLine[]
}

const ListProductOrderedComponent = (props: Props) => {
  const { items } = props

  return (
    <FlatList
      numColumns={1}
      data={items}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <ProductOrderedComponent
          item={item}
          key={item.orderLineId}
          styles={{ padding: 16, backgroundColor: '#FFF5FD', borderRadius: 8 }}
        />
      )}
    />
  )
}
export default ListProductOrderedComponent
