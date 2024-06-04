import { ProductItem } from '@appTypes/product.type'
import { ProductItemComponent } from '@screens/homes/components'
import { FlatList } from 'react-native'

interface Props {
  items: ProductItem[]
}

const ListProductComponent = (props: Props) => {
  const { items } = props

  return (
    <FlatList
      numColumns={2}
      data={items}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <ProductItemComponent item={item} key={item.productItemId} styles={{ flex: 1, width: undefined }} />
      )}
    />
  )
}
export default ListProductComponent
