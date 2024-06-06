import { ProductCategory } from '@appTypes/product.type'
import { CardComponent, TextComponent } from '@components'
import { appColors } from '@constants'
import { StyleProp, View, ViewStyle } from 'react-native'

interface Props {
  item: ProductCategory
  styles?: StyleProp<ViewStyle>
}

const CatelogItemComponent = (props: Props) => {
  const { item, styles } = props

  return (
    <CardComponent isShadow styles={styles} onPress={() => {}}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 12, backgroundColor: '#EFEFEF' }}>
        <TextComponent text={item.productCategoryName} numberOfLine={1} size={17} color={appColors.text} />
      </View>
    </CardComponent>
  )
}
export default CatelogItemComponent
