import { ContainerComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '@components'
import { appColors } from '@constants'
import { Add, SearchNormal, Sort } from 'iconsax-react-native'
import { TouchableOpacity } from 'react-native'
import { globalStyles } from 'src/styles/globalStyles'
import { ListProductComponent } from '@screens/homes/components'
import { useEffect, useState } from 'react'
import { ProductItem } from '@appTypes/product.type'
import { DATAS } from '@assets'

const ProductScreen = ({ navigation }: any) => {
  const [productItemListData, setProductItemListData] = useState<ProductItem[]>([])

  useEffect(() => {
    setProductItemListData(DATAS.productItemList)
  }, [])

  return (
    <ContainerComponent
      isBack
      title='Products'
      icon={
        <Add
          size={24}
          color={appColors.primary}
          onPress={() => navigation.navigate('HomeNavigator', { screen: 'ProductAddScreen' })}
        />
      }
    >
      {/* button search */}
      <SectionComponent styles={{ paddingBottom: 10 }}>
        <RowComponent>
          <RowComponent
            styles={[{ flex: 1 }, globalStyles.inputContainer]}
            onPress={() =>
              navigation.navigate('HomeNavigator', { screen: 'ProductSearchScreen', params: { isFilter: false } })
            }
          >
            <SearchNormal size={20} color={appColors.text} />
            <SpaceComponent width={10} />
            <TextComponent color={'rgba(0, 0, 0, 0.4)'} text='Search...' size={15} flex={1} />
          </RowComponent>

          <SpaceComponent width={16} />

          <TouchableOpacity
            style={{
              borderRadius: 12,
              minHeight: 44,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: appColors.black
            }}
            onPress={() =>
              navigation.navigate('HomeNavigator', {
                screen: 'ProductSearchScreen',
                params: { isFilter: true }
              })
            }
          >
            <Sort size={24} color={appColors.primary} />
          </TouchableOpacity>
        </RowComponent>
        <SpaceComponent height={8} />

        <TextComponent text='Found 10 items' size={14} color={'rgba(0, 0, 0, 0.4)'} />
      </SectionComponent>
      <SectionComponent styles={{ paddingHorizontal: 8, paddingBottom: 6, flex: 1 }}>
        <ListProductComponent items={productItemListData} />
      </SectionComponent>
    </ContainerComponent>
  )
}
export default ProductScreen
