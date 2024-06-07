import { OrderLine } from '@appTypes/order.type'
import { appColors } from '@constants'
import { ProductOrderedComponent } from '@screens/orders/components'
import { useEffect } from 'react'
import { FlatList, ScrollView } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
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
      style={{ flex: 1, backgroundColor: 'yellow', width: '100%', maxHeight: hp(20) }}
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
            styles={{ padding: wp(1), backgroundColor: appColors.White, borderRadius: 8, width: wp(90) }}
          />
        )}
      />
    </ScrollView>
  )
}
export default ListProductOrderedComponent
