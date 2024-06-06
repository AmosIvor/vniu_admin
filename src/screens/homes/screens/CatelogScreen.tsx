import { ProductCategory } from '@appTypes/product.type'
import {
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent
} from '@components'
import { appColors } from '@constants'
import { ModalLoading } from '@modals'
import { ListCatelogComponent } from '@screens/homes/components'
import { Add, SearchNormal } from 'iconsax-react-native'
import { useEffect, useState } from 'react'
import { View } from 'react-native'

const catelogsData: ProductCategory[] = [
  { productCategoryId: 1, productCategoryName: 'Outerwear' },
  { productCategoryId: 2, productCategoryName: 'Teen Fashion' },
  { productCategoryId: 3, productCategoryName: 'Vintage' },
  { productCategoryId: 4, productCategoryName: 'Formal' },
  { productCategoryId: 5, productCategoryName: 'Sports' },
  { productCategoryId: 6, productCategoryName: 'Maternity' }
]

const CatelogScreen = ({ navigation }: any) => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [catelogs, setCatelogs] = useState<ProductCategory[]>([])
  const [searchKey, setSearchKey] = useState('')

  useEffect(() => {
    setCatelogs(catelogsData)
  }, [])

  return (
    <ContainerComponent
      isBack
      title='Catelogs'
      icon={
        <Add
          size={24}
          color={appColors.primary}
          onPress={() => navigation.navigate('HomeNavigator', { screen: 'CatelogAddScreen' })}
        />
      }
    >
      {/* button search */}
      <SectionComponent styles={{ paddingBottom: 10 }}>
        <RowComponent>
          <RowComponent styles={{ flex: 1 }}>
            <InputComponent
              value={searchKey}
              onChange={(val) => setSearchKey(val)}
              placeholder='Search...'
              affix={
                <View style={{}}>
                  <SearchNormal variant='Outline' color={appColors.black} size={24} />
                </View>
              }
              isAllowClear
            />
          </RowComponent>
        </RowComponent>
        <SpaceComponent height={8} />

        <TextComponent text='Found 10 items' size={14} color={'rgba(0, 0, 0, 0.4)'} />
      </SectionComponent>

      <SectionComponent styles={{ paddingHorizontal: 8, paddingBottom: 6, flex: 1 }}>
        <ListCatelogComponent items={catelogs} />
      </SectionComponent>

      <ModalLoading isVisible={isShowModal} />
    </ContainerComponent>
  )
}
export default CatelogScreen
