import { OrderLine } from '@appTypes/order.type'
import { appColors, appInfors } from '@constants'
import { ProductOrderedComponent } from '@screens/orders/components'
import { FlatList, ScrollView } from 'react-native'

interface Props {
  items: OrderLine[]
}

const ListProductOrderedComponent = (props: Props) => {
  const { items } = props

  return (
    <ScrollView
      scrollEnabled={false}
      horizontal={true}
      style={{ flex: 1, width: '100%', minHeight: appInfors.sizes.HEIGHT * 0.1 }}
    >
      <FlatList
        numColumns={1}
        showsVerticalScrollIndicator
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ProductOrderedComponent
            item={item}
            key={item.orderLineId}
            styles={{
              padding: 16,
              backgroundColor: appColors.White,
              borderRadius: 8,
              width: appInfors.sizes.WIDTH - 16 * 2
            }}
          />
        )}
      />
    </ScrollView>
  )
}
export default ListProductOrderedComponent
