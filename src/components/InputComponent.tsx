import { SpaceComponent, TextComponent } from '@components'
import { appFonts } from '@constants'
import { ReactNode } from 'react'
import { StyleProp, StyleSheet, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { appColors } from 'src/constants/appColors'
import { globalStyles } from 'src/styles/globalStyles'

interface Props {
  value: string
  onChange: (val: string) => void
  placeholder?: string
  affix?: ReactNode
  suffix?: ReactNode
  isAllowClear?: boolean
  inputRef?: any
  title?: string
  inputStyles?: StyleProp<ViewStyle>
  inputTextStyles?: StyleProp<TextStyle>
  isMultiline?: boolean
  numberOfLine?: number
}

const InputComponent = (props: Props) => {
  const {
    value,
    onChange,
    placeholder,
    affix,
    suffix,
    isAllowClear,
    inputRef,
    title,
    inputStyles,
    inputTextStyles,
    isMultiline,
    numberOfLine
  } = props

  return (
    <>
      {title ? (
        <View style={{ marginBottom: title ? 10 : 0 }}>
          <TextComponent text={title ?? 'Name'} font={appFonts.regular} size={19} color={appColors.text} />
          <SpaceComponent height={6} />
          <View
            style={[
              styles.inputContainer,
              {
                minHeight: isMultiline && numberOfLine ? 34 * numberOfLine : 44,
                alignItems: isMultiline ? 'flex-start' : 'center'
              },
              inputStyles
            ]}
          >
            {affix ?? affix}

            <TextInput
              value={value}
              ref={inputRef}
              style={[styles.input, globalStyles.text, inputTextStyles, { paddingBottom: 6 }]}
              placeholder={placeholder ?? ''}
              onChangeText={(val) => onChange(val)}
              multiline={isMultiline}
              numberOfLines={numberOfLine}
              textAlignVertical={isMultiline ? 'top' : 'bottom'}
            />
            {suffix ?? suffix}
            <TouchableOpacity onPress={() => onChange('')}>
              {isAllowClear && value && <AntDesign name='close' size={22} color={appColors.black} />}
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={[styles.inputContainer, inputStyles]}>
          {affix ?? affix}

          <TextInput
            value={value}
            ref={inputRef}
            style={[styles.input, globalStyles.text, inputTextStyles]}
            placeholder={placeholder ?? ''}
            onChangeText={(val) => onChange(val)}
          />
          {suffix ?? suffix}
          <TouchableOpacity onPress={() => onChange('')}>
            {isAllowClear && value && <AntDesign name='close' size={22} color={appColors.black} />}
          </TouchableOpacity>
        </View>
      )}
    </>
  )
}
export default InputComponent

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.black,
    width: '100%',
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: appColors.bgPrimary
  },

  input: {
    padding: 0,
    margin: 0,
    flex: 1,
    paddingHorizontal: 14,
    color: appColors.text
  }
})
