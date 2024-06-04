import {
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent
} from '@components'
import { appColors, appFonts } from '@constants'
import { ModalFiltering } from '@modals'
import { SearchNormal, Sort } from 'iconsax-react-native'
import { useEffect, useRef, useState } from 'react'
import { Keyboard, TouchableOpacity, View } from 'react-native'

const ProductSearchScreen = ({ navigation, route }: any) => {
  const [search, setSearch] = useState('')
  const [isShowModalFilter, setIsShowModalFilter] = useState(false)
  const inputRef = useRef<any>(null)

  useEffect(() => {
    if (route.params['isFilter']) {
      setIsShowModalFilter(true)
    } else {
      inputRef.current && inputRef.current.focus()
    }
  }, [route.params])

  const onPressFilter = () => {
    // hide keyboard
    Keyboard.dismiss()
    setIsShowModalFilter(true)
  }

  return (
    <ContainerComponent>
      <SpaceComponent height={10} />

      {/* search-bar */}
      <SectionComponent>
        <RowComponent styles={{ alignItems: 'flex-start' }}>
          <RowComponent styles={{ flex: 1 }}>
            <InputComponent
              inputRef={inputRef}
              value={search}
              onChange={(val) => setSearch(val)}
              placeholder='Search...'
              affix={
                <View style={{}}>
                  <SearchNormal variant='Outline' color={appColors.black} size={24} />
                </View>
              }
              isAllowClear
            />
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
            onPress={onPressFilter}
          >
            <Sort size={24} color={appColors.black} />
          </TouchableOpacity>
        </RowComponent>
        <ModalFiltering isVisible={isShowModalFilter} onClosed={() => setIsShowModalFilter(false)} />
      </SectionComponent>

      <SectionComponent>
        <TextComponent font={appFonts.medium} size={20} text='Hello' />
        <TextComponent font={appFonts.regular} size={20} text='Hello' />
      </SectionComponent>
    </ContainerComponent>
  )
}
export default ProductSearchScreen
