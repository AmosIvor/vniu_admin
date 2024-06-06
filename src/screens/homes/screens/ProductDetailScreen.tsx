import { IMAGES } from '@assets'
import {
  ButtonComponent,
  CarouselComponent,
  ContainerComponent,
  DropdownPickerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent
} from '@components'
import { appColors, appInfors } from '@constants'
import { Image } from 'react-native'

interface SelectModel {
  label: string
  value: string
}

const ProductDetailScreen = () => {
  const widthCalculate = appInfors.sizes.WIDTH * 0.6
  const widthSplit = appInfors.sizes.WIDTH * 0.3
  const widthButton = (appInfors.sizes.WIDTH - 16 * 2 - 40) / 2

  const usersSelected: SelectModel[] = [
    { label: 'abc', value: 'ab1' },
    { label: 'abd', value: 'ab2' },
    { label: 'abe', value: 'ab3' },
    { label: 'abf', value: 'ab4' }
  ]

  return (
    <ContainerComponent isBack title='Product Detail' isScroll>
      {/* product-images */}
      <SpaceComponent height={10} />

      {/* <CarouselComponent /> */}
      <CarouselComponent />

      {/* product-information */}
      <SectionComponent>
        {/* product-name */}
        <InputComponent
          title='Name'
          value='Loose Shirt Open'
          onChange={() => {}}
          inputStyles={{ paddingHorizontal: 6, borderRadius: 8 }}
          inputTextStyles={{ fontSize: 16 }}
        />

        <SpaceComponent height={16} />

        <RowComponent justify='space-between'>
          {/* Category */}
          <DropdownPickerComponent
            title='Category'
            selected={['abc']}
            items={usersSelected}
            onSelect={() => {}}
            multible
            styles={{ flex: 1 }}
          />

          <SpaceComponent width={40} />

          <InputComponent
            title='Price ($)'
            value='10.9'
            onChange={() => {}}
            inputStyles={{ paddingHorizontal: 6, borderRadius: 8, width: widthSplit }}
            inputTextStyles={{ fontSize: 16 }}
          />
        </RowComponent>

        <SpaceComponent height={16} />

        <RowComponent justify='space-between'>
          <DropdownPickerComponent
            title='Size'
            selected={['S']}
            items={usersSelected}
            onSelect={() => {}}
            multible
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
          />
          <SpaceComponent width={40} />
          <ButtonComponent type='primary' text='Update' styles={{ width: widthButton }} />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  )
}
export default ProductDetailScreen
