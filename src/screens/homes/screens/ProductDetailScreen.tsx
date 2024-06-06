import { ProductItem } from '@appTypes/product.type'
import { DATAS } from '@assets'
import {
  ButtonComponent,
  CarouselComponent,
  ContainerComponent,
  DropdownPickerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent
} from '@components'
import { appColors, appInfors } from '@constants'
import { useState } from 'react'

interface SelectModel {
  label: string
  value: string
}

const ProductDetailScreen = ({ navigation }: any) => {
  const [productItemData, setProductItemData] = useState<ProductItem>(DATAS.productItemList[0])
  const widthSplit = appInfors.sizes.WIDTH * 0.3
  const widthButton = (appInfors.sizes.WIDTH - 16 * 2 - 40) / 2

  const [value, setValue] = useState<string[]>(['2'])
  const categoryList: SelectModel[] = [
    { label: 'Shirt', value: '1' },
    { label: 'Polo', value: '2' },
    { label: 'T-Shirt', value: '3' },
    { label: 'Dress', value: '4' }
  ]

  const [valueSize, setValueSize] = useState<string[]>(['2'])
  const sizeList: SelectModel[] = [
    { label: 'S', value: '1' },
    { label: 'M', value: '2' },
    { label: 'L', value: '3' },
    { label: 'XL', value: '4' }
  ]

  const handleChangeValue = (value: string[]) => {
    setValue(value)
  }

  const handleChangeValueSize = (value: string[]) => {
    setValueSize(value)
  }

  return (
    <ContainerComponent isBack title='Product Detail' isScroll>
      {/* product-images */}
      <SpaceComponent height={10} />

      {/* <CarouselComponent /> */}
      <CarouselComponent imagesData={productItemData.productImages} />

      {/* product-information */}
      <SectionComponent>
        {/* product-name */}
        <InputComponent
          title='Name'
          value={'Loost Shirt'}
          onChange={() => {}}
          inputStyles={{ paddingHorizontal: 6, borderRadius: 8 }}
          inputTextStyles={{ fontSize: 16 }}
        />

        <SpaceComponent height={16} />

        <RowComponent justify='space-between'>
          {/* Category */}
          <DropdownPickerComponent
            title='Category'
            selected={value}
            items={categoryList}
            onSelect={(val) => handleChangeValue(val)}
            // multible
            styles={{ flex: 1 }}
          />

          <SpaceComponent width={40} />

          <InputComponent
            title='Price ($)'
            value={productItemData.salePrice.toString()}
            onChange={() => {}}
            inputStyles={{ paddingHorizontal: 6, borderRadius: 8, width: widthSplit }}
            inputTextStyles={{ fontSize: 16 }}
          />
        </RowComponent>

        <SpaceComponent height={16} />

        <RowComponent justify='space-between'>
          <DropdownPickerComponent
            title='Size'
            selected={valueSize}
            items={sizeList}
            onSelect={(val) => handleChangeValue(val)}
            // multible
            styles={{ flex: 1 }}
          />

          <SpaceComponent width={40} />

          <InputComponent
            title='Quantity'
            value='99'
            onChange={() => {}}
            inputStyles={{ paddingHorizontal: 6, borderRadius: 8, width: widthSplit }}
            inputTextStyles={{ fontSize: 16 }}
          />
        </RowComponent>

        <SpaceComponent height={16} />

        {/* product-description */}
        <InputComponent
          title='Description'
          value='Hello my friend'
          onChange={() => {}}
          inputStyles={{ paddingHorizontal: 6, paddingTop: 10, borderRadius: 8 }}
          inputTextStyles={{ fontSize: 16 }}
          isMultiline
          numberOfLine={2}
        />
      </SectionComponent>
      {/* button  */}
      <SectionComponent>
        <RowComponent>
          <ButtonComponent
            type='primary'
            text='Cancel'
            color={appColors.SilverSand}
            styles={{ width: widthButton }}
            textColor={appColors.text}
            onPress={() => navigation.goBack()}
          />
          <SpaceComponent width={40} />
          <ButtonComponent type='primary' text='Update' styles={{ width: widthButton }} />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  )
}
export default ProductDetailScreen
