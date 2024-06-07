import { OrderResponse } from '@appTypes/order.type'
import { CardComponent, CircleComponent, RowComponent, SpaceComponent, TextComponent } from '@components'
import { appColors, appFonts } from '@constants'
import { useNavigation } from '@react-navigation/native'
import { Calendar, Message } from 'iconsax-react-native'
import { StyleProp, View, ViewStyle } from 'react-native'

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
      onPress={() =>
        navigation.navigate('OrderNavigator', { screen: 'OrderDetailScreen', params: { id: item.orderId } })
      }
    >
      {/* header */}
      <RowComponent justify='space-between'>
        <TextComponent text='Order #1' font={appFonts.medium} size={17} color={appColors.text} />
        <RowComponent>
          <TextComponent text='28 Jan, 2022' size={15} color={appColors.text} />
          <SpaceComponent width={7} />
          <Calendar size={20} color={appColors.text} />
        </RowComponent>
      </RowComponent>

      <SpaceComponent height={10} />

      <View style={{ marginLeft: 26, paddingRight: 14 }}>
        <RowComponent justify='space-between'>
          <TextComponent text='Amos Ivor' size={17} font={appFonts.medium} color={appColors.text} />
          <TextComponent text='0332541875' size={16} color={appColors.text} />
        </RowComponent>
        <SpaceComponent height={7} />
        <TextComponent
          text='Amos Ivor Amos Ivor Amos Ivor Amos Ivor Amos Ivor Amos Ivor '
          size={16}
          color={'rgba(0, 0, 0, 0.4)'}
          numberOfLine={2}
        />
        <SpaceComponent height={7} />
        <TextComponent text='Total: 20$' size={17} font={appFonts.medium} color={appColors.text} />
        <SpaceComponent height={10} />
        <RowComponent justify='space-between'>
          <TextComponent text='PENDING' size={17} font={appFonts.medium} color={appColors.primary} />
          <CircleComponent styles={{ backgroundColor: '#FFF7FC' }}>
            <Message size={24} color={appColors.primary} />
          </CircleComponent>
        </RowComponent>
      </View>
    </CardComponent>
  )
}
export default OrderItemComponent
