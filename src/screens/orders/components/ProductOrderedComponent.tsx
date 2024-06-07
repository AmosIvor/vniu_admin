import { OrderLine } from '@appTypes/order.type'
import { CardComponent, RowComponent, SpaceComponent, TextComponent } from '@components'
import { useNavigation } from '@react-navigation/native'
import { Image, StyleProp, View, ViewStyle } from 'react-native'

interface Props {
  item: OrderLine
  styles?: StyleProp<ViewStyle>
}

const ProductOrderedComponent = (props: Props) => {
  const { item, styles } = props
  const navigation: any = useNavigation()

  return (
    <CardComponent
      isShadow
      styles={styles}
      onPress={() =>
        navigation.navigate('HomeNavigator', { screen: 'ProductDetailScreen', params: { id: item.productItemId } })
      }
    >
      <RowComponent>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-thsyY7pcpafX5U5CN_fkREa_Bmrvak0sRg&s'
          }}
          style={{ width: 100, height: 100, resizeMode: 'cover' }}
        />
        <SpaceComponent width={16} />
        <View
          style={{
            flex: 1,
            height: 100,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: 'yellow'
          }}
        >
          <TextComponent text='Name' />
          <TextComponent text='Size' />
          <RowComponent justify='space-between' styles={{ backgroundColor: 'red', width: '100%' }}>
            <TextComponent text='Quantity' />
            <TextComponent text='Price' />
          </RowComponent>
        </View>
      </RowComponent>
    </CardComponent>
  )
}
export default ProductOrderedComponent
