import { ProductItem } from '@appTypes/product.type'
import { appInfors } from '@constants'
import { ProductItemComponent } from '@screens/homes/components'
import { FlatList } from 'react-native'

interface Props {
  items: ProductItem[]
}

const ListProductComponent = (props: Props) => {
  const { items } = props
  const widthCalculate = (appInfors.sizes.WIDTH - 16 * 2 - 16) / 2

  return (
    <FlatList
      numColumns={2}
      data={items}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <ProductItemComponent item={item} key={item.productItemId} styles={{ width: widthCalculate }} />
      )}
    />
  )
}
export default ListProductComponent
