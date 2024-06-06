import { RowComponent, SpaceComponent, TextComponent } from '@components'
import { appColors, appFonts } from '@constants'
import { ArrowDown2 } from 'iconsax-react-native'
import { useState } from 'react'
import { Button, Modal, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { globalStyles } from 'src/styles/globalStyles'

interface Props {
  type?: 'date' | 'time' | 'datetime'
  title?: string
  placeholder?: string
  selected?: Date
  onSelect: (value: Date) => void
}

const DateTimePickerComponent = (props: Props) => {
  const { selected, onSelect, type, title, placeholder } = props
  const [isVisibleModalDateTime, setIsVisibleModalDateTime] = useState(false)
  const [date, setDate] = useState<Date>(selected ?? new Date())

  return (
    <>
      <View style={{ marginBottom: 16 }}>
        {title && <TextComponent text={title ?? 'Name'} font={appFonts.regular} size={19} color={appColors.text} />}
        <RowComponent
          styles={[globalStyles.inputContainer, { marginTop: title ? 8 : 0, paddingVertical: 16 }]}
          onPress={() => setIsVisibleModalDateTime(true)}
        >
          <TextComponent
            flex={1}
            text={
              selected
                ? type === 'time'
                  ? `${selected.getHours()} : ${selected.getMinutes()}`
                  : `${selected.getDate()}/${selected.getMonth() + 1}/${selected.getFullYear()}`
                : placeholder
                ? placeholder
                : ''
            }
            color={selected ? appColors.text : '#676767'}
          />

          <ArrowDown2 size={20} color={appColors.text} />
        </RowComponent>
      </View>

      {/* Modal */}
      <Modal visible={isVisibleModalDateTime} transparent animationType='slide'>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <View style={{ margin: 20, width: '90%', backgroundColor: appColors.White, padding: 20, borderRadius: 20 }}>
            <TextComponent text='Date time picker' color={appColors.gray} />

            <View>
              <DatePicker mode={type ?? 'datetime'} date={date} onDateChange={(val) => setDate(val)} locale='vi' />
            </View>

            <SpaceComponent height={20} />

            <Button
              title='Confirm'
              onPress={() => {
                onSelect(date)
                setIsVisibleModalDateTime(false)
              }}
            />

            <SpaceComponent height={10} />

            <Button title='Close' onPress={() => setIsVisibleModalDateTime(false)} />
          </View>
        </View>
      </Modal>
    </>
  )
}
export default DateTimePickerComponent
