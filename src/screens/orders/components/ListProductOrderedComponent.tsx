import { OrderLine } from '@appTypes/order.type'
import { appColors } from '@constants'
import { ProductOrderedComponent } from '@screens/orders/components'
import { useEffect } from 'react'
import { FlatList, ScrollView } from 'react-native'

interface Props {
  items: OrderLine[]
}

const ListProductOrderedComponent = (props: Props) => {
  const { items } = props
  useEffect(() => {
    console.log('items', items)
    console.log(items.length)
  }, [])

  return (
    <ScrollView
      scrollEnabled={false}
      horizontal={true}
      style={{ flex: 1, backgroundColor: 'yellow', width: '100%', minHeight: 100 }}
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
            styles={{ padding: 16, backgroundColor: appColors.White, borderRadius: 8 }}
          />
        )}
      />
    </ScrollView>
  )
}
export default ListProductOrderedComponent
