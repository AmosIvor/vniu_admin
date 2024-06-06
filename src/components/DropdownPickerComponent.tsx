import { ButtonComponent, InputComponent, RowComponent, SpaceComponent, TextComponent } from '@components'
import { appColors, appFonts, appInfors } from '@constants'
import { ArrowDown2, SearchNormal, TickCircle } from 'iconsax-react-native'
import { useCallback, useEffect, useState } from 'react'
import { FlatList, Modal, StyleProp, TouchableOpacity, TouchableWithoutFeedback, View, ViewStyle } from 'react-native'
import { globalStyles } from 'src/styles/globalStyles'

interface SelectModel {
  label: string
  value: string
}

interface Props {
  title?: string
  items: SelectModel[]
  selected?: string[]
  onSelect: (value: string[]) => void
  multible?: boolean
  styles?: StyleProp<ViewStyle>
}

const DropdownPickerComponent = (props: Props) => {
  const { title, items, selected, onSelect, multible, styles } = props
  const [isVisible, setIsVisible] = useState(false)
  const [searchKey, setSearchKey] = useState('')
  const [results, setResults] = useState<SelectModel[]>([])
  const [dataSelected, setDataSelected] = useState<string[]>([])

  // each time user open => if has selected => set selected
  useEffect(() => {
    selected && setDataSelected(selected)
  }, [isVisible, selected])

  useEffect(() => {
    if (!searchKey) {
      setResults([])
    } else {
      const data = items.filter((element) => element.label.toLowerCase().includes(searchKey.toLowerCase()))

      setResults(data)
    }
  }, [searchKey])

  const handleSelectItem = (id: string) => {
    if (multible) {
      const data = [...dataSelected]
      const index = data.findIndex((element) => element === id)

      if (index !== -1) {
        // already has item
        data.splice(index, 1)
      } else {
        data.push(id)
      }

      setDataSelected(data)
    } else {
      setDataSelected([id])
    }
  }

  const handleConfirmSelect = () => {
    onSelect(dataSelected)
    setDataSelected([])
    setIsVisible(false)
  }

  const handleRemoveItemSelected = (index: number) => {
    if (selected) {
      selected?.splice(index, 1)
      onSelect(selected)
    }
  }

  const renderSelectedItem = useCallback((id: string, index: number) => {
    const item = items.find((element) => element.value === id)

    return (
      item && (
        <RowComponent
          key={id}
          // onPress={() => handleRemoveItemSelected(index)}
          styles={{
            // marginRight: 6,
            // marginBottom: 8,
            // padding: 6,
            paddingHorizontal: 6
            // borderRadius: 100,
            // borderWidth: 0.5,
            // borderColor: appColors.text2
          }}
        >
          <TextComponent text={item.label} flex={0} size={16} styles={{ marginTop: -2 }} />
          {/* <SpaceComponent width={8} /> */}
          {/* <AntDesign name='close' size={14} color={appColors.text} /> */}
        </RowComponent>
      )
    )
  }, [])

  return (
    <View style={[{ marginBottom: 10 }, styles]}>
      {title && <TextComponent text={title ?? 'Name'} font={appFonts.regular} size={19} color={appColors.text} />}

      <SpaceComponent height={6} />

      <RowComponent
        onPress={() => setIsVisible(true)}
        styles={[
          globalStyles.inputContainer,
          {
            minHeight: 44,
            borderRadius: 8
          }
        ]}
      >
        <View style={{ flex: 1, paddingRight: 12 }}>
          {selected && selected.length > 0 ? (
            <RowComponent justify='flex-start' styles={{ flexWrap: 'wrap' }}>
              {selected.map((id, index) => renderSelectedItem(id, index))}
              {/* <TextComponent text={selected[0]} /> */}
            </RowComponent>
          ) : (
            <TextComponent text='Select' color={appColors.text2} flex={0} />
          )}
        </View>

        <ArrowDown2 size={20} color={appColors.text} />
      </RowComponent>

      <Modal visible={isVisible} style={{ flex: 1 }} transparent animationType='fade' statusBarTranslucent>
        <TouchableWithoutFeedback onPressOut={() => setIsVisible(false)} style={{ flex: 1 }}>
          <View
            style={[
              {
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
              }
            ]}
          >
            <View
              style={{
                width: appInfors.sizes.WIDTH * 0.9,
                backgroundColor: appColors.White,
                padding: 20,
                paddingBottom: 10,
                borderRadius: 10,
                height: appInfors.sizes.HEIGHT * 0.6
              }}
            >
              <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                  <RowComponent styles={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flex: 1, marginRight: 12 }}>
                      <InputComponent
                        value={searchKey}
                        onChange={(val) => setSearchKey(val)}
                        placeholder='Search'
                        affix={<SearchNormal size={20} color={appColors.text2} />}
                        isAllowClear
                        inputStyles={{ borderRadius: 8 }}
                      />
                    </View>
                    <TouchableOpacity onPress={() => setIsVisible(false)}>
                      <TextComponent text='Cancel' color='coral' flex={0} />
                    </TouchableOpacity>
                  </RowComponent>
                }
                style={{}}
                data={searchKey ? results : items}
                renderItem={({ item }) => (
                  <RowComponent
                    key={item.value}
                    onPress={() => handleSelectItem(item.value)}
                    styles={{ paddingVertical: 16 }}
                    justify='space-between'
                  >
                    <TextComponent
                      size={16}
                      text={item.label}
                      font={dataSelected.includes(item.value) ? appFonts.medium : appFonts.regular}
                      color={dataSelected.includes(item.value) ? appColors.primary : appColors.text}
                    />
                    {dataSelected.includes(item.value) && <TickCircle size={22} color={appColors.primary} />}
                  </RowComponent>
                )}
              />

              <SpaceComponent height={10} />
              <ButtonComponent type='primary' text='Confirm' onPress={handleConfirmSelect} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}
export default DropdownPickerComponent
