import { ProductItem } from '@appTypes/product.type'
import { IMAGES } from '@assets'
import { CardComponent, RowComponent, SpaceComponent, TextComponent } from '@components'
import { appColors, appFonts, appInfors } from '@constants'
import { useNavigation } from '@react-navigation/native'
import { Image, StyleProp, View, ViewStyle } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

interface Props {
  item: ProductItem
  styles?: StyleProp<ViewStyle>
}

const ProductItemComponent = (props: Props) => {
  const { item, styles } = props
  const navigation: any = useNavigation()

  const heightCalculate = (appInfors.sizes.WIDTH - 16 * 2 - 16) / 2
  const percentCalculate = Math.round(((item.originalPrice - item.salePrice) / item.originalPrice) * 100)

  return (
    <CardComponent
      isShadow
      styles={styles}
      onPress={() => navigation.navigate('HomeNavigator', { screen: 'ProductDetailScreen', id: item.productItemId })}
    >
      <View
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '100%',
          backgroundColor: 'yellow',
          overflow: 'hidden',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        }}
      >
        <Image
          source={IMAGES.avatar}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: heightCalculate,
            resizeMode: 'cover'
          }}
        />
      </View>

      <View style={{ paddingVertical: 8, paddingHorizontal: 10 }}>
        <RowComponent>
          {/* Price */}
          <TextComponent text='10.7 $' font={appFonts.medium} size={19} color={appColors.text} />

          <SpaceComponent width={18} />

          {/* Percent */}
          <View
            style={{ paddingVertical: 2, paddingHorizontal: 8, backgroundColor: appColors.LightGray, borderRadius: 6 }}
          >
            <TextComponent text={`-${percentCalculate}%`} font={appFonts.medium} size={13} color={appColors.Primary} />
          </View>
        </RowComponent>

        <SpaceComponent height={6} />

        <TextComponent
          text='Loose open shirt'
          font={appFonts.medium}
          size={17}
          color={appColors.text}
          numberOfLine={2}
        />

        <SpaceComponent height={10} />

        <RowComponent>
          <View
            style={{
              paddingVertical: 2,
              paddingHorizontal: 8,
              backgroundColor: appColors.White,
              borderRadius: 6,
              borderWidth: 1,
              borderColor: appColors.SilverSand
            }}
          >
            <TextComponent text='4 sizes' font={appFonts.medium} size={13} color={appColors.SilverSand} />
          </View>
        </RowComponent>

        <SpaceComponent height={7} />

        <RowComponent>
          <RowComponent>
            <AntDesign name='star' size={14} color='#F9CB62' />
            <SpaceComponent width={6} />
            <TextComponent text='4.8 ratings' color={appColors.text} size={14} />
          </RowComponent>
        </RowComponent>
      </View>
    </CardComponent>
  )
}
export default ProductItemComponent
