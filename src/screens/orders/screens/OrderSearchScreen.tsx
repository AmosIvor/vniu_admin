import { OrderResponse } from '@appTypes/order.type'
import { DATAS } from '@assets'
import {
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent
} from '@components'
import { appColors } from '@constants'
import { ModalFiltering } from '@modals'
import { ListOrderComponent } from '@screens/orders/components'
import { SearchNormal, Sort } from 'iconsax-react-native'
import { debounce } from 'lodash'
import { useEffect, useRef, useState } from 'react'
import { Keyboard, TouchableOpacity, View } from 'react-native'

const OrderSearchScreen = ({ navigation, route }: any) => {
  const [searchKey, setSearchKey] = useState('')
  const [isShowModalFilter, setIsShowModalFilter] = useState(false)
  const [orderListData, setOrderListData] = useState<OrderResponse[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const inputRef = useRef<any>(null)

  useEffect(() => {
    if (route.params['isFilter']) {
      setIsShowModalFilter(true)
    } else {
      inputRef.current && inputRef.current.focus()
    }
  }, [route.params])

  useEffect(() => {
    setOrderListData(DATAS.orderList)
  }, [])

  useEffect(() => {
    if (searchKey) {
      const handleChangeSearchValue = debounce(handleSearchWithTitle, 1000)

      handleChangeSearchValue()
    }
  })

  const handleSearchWithTitle = () => {
    // call api search key
    console.log('search key: ', searchKey)
  }

  const onPressFilter = () => {
    // hide keyboard
    Keyboard.dismiss()
    setIsShowModalFilter(true)
  }

  return (
    <ContainerComponent>
      <SpaceComponent height={10} />

      {/* search-bar */}
      <SectionComponent styles={{ paddingBottom: 10 }}>
        <RowComponent styles={{ alignItems: 'flex-start' }}>
          <RowComponent styles={{ flex: 1 }}>
            <InputComponent
              inputRef={inputRef}
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

        <SpaceComponent height={8} />

        <TextComponent text='Found 10 items' size={14} color={'rgba(0, 0, 0, 0.4)'} />
      </SectionComponent>

      <SectionComponent styles={{ paddingHorizontal: 8, paddingBottom: 6, flex: 1 }}>
        <ListOrderComponent items={orderListData} />
      </SectionComponent>
    </ContainerComponent>
  )
}
export default OrderSearchScreen
