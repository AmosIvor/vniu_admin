import { OrderResponse } from '@appTypes/order.type'
import { CardComponent, TextComponent } from '@components'
import { useNavigation } from '@react-navigation/native'
import { StyleProp, ViewStyle } from 'react-native'

interface Props {
  item: OrderResponse
  styles?: StyleProp<ViewStyle>
}

const OrderItemComponent = (props: Props) => {
  const { item, styles } = props
  const navigation: any = useNavigation()

  return (
    <CardComponent
      isShadow
      styles={styles}
      onPress={() => navigation.navigate('OrderNavigator', { screen: 'OrderDetailScreen', id: item.orderId })}
    >
      <TextComponent text='Hello' />
    </CardComponent>
  )
}
export default OrderItemComponent
