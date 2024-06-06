import { ProductCategory } from '@appTypes/product.type'
import { appInfors } from '@constants'
import { FlatList } from 'react-native'
import CatelogItemComponent from './CatelogItemComponent'

interface Props {
  items: ProductCategory[]
}

const ListCatelogComponent = (props: Props) => {
  const { items } = props
  const widthCalculate = (appInfors.sizes.WIDTH - 16 * 2 - 16) / 2

  return (
    <FlatList
      numColumns={2}
      data={items}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <CatelogItemComponent
          item={item}
          key={item.productCategoryId}
          styles={{ width: widthCalculate, overflow: 'hidden' }}
        />
      )}
    />
  )
}
export default ListCatelogComponent
