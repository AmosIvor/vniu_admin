import {
  ButtonComponent,
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

const CatelogAddScreen = ({ navigation }: any) => {
  const widthButton = (appInfors.sizes.WIDTH - 16 * 2 - 40) / 2
  const [valueCategory, setValueCategory] = useState<string[]>(['2'])
  const categoryList: SelectModel[] = [
    { label: 'Vintage', value: '1' },
    { label: 'Maternity', value: '2' },
    { label: 'Sports', value: '3' },
    { label: 'Outerwear', value: '4' },
    { label: 'Formal', value: '5' }
  ]

  const handleChangeValue = (value: string[]) => {
    setValueCategory(value)
  }

  return (
    <ContainerComponent isBack title='Add Category'>
      <SectionComponent>
        <InputComponent
          title='Category Name'
          value='GenZ'
          onChange={() => {}}
          inputStyles={{ paddingHorizontal: 6, borderRadius: 8 }}
          inputTextStyles={{ fontSize: 16 }}
        />

        <SpaceComponent height={16} />

        <RowComponent>
          <DropdownPickerComponent
            title='Category Parent'
            selected={valueCategory}
            items={categoryList}
            onSelect={(val) => handleChangeValue(val)}
            // multible
            styles={{ flex: 1 }}
          />
        </RowComponent>
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
          <ButtonComponent type='primary' text='Add' styles={{ width: widthButton }} />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  )
}
export default CatelogAddScreen
