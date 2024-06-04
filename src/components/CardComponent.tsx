import { appColors } from '@constants'
import { ReactNode } from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import { globalStyles } from 'src/styles/globalStyles'

interface Props {
  onPress?: () => void
  children: ReactNode
  styles?: StyleProp<ViewStyle>
  isShadow?: boolean
  color?: string
}

const CardComponent = (props: Props) => {
  const { onPress, children, styles, isShadow, color } = props

  const localStyles: StyleProp<ViewStyle>[] = [
    globalStyles.card,
    isShadow ? globalStyles.shadow : undefined,
    { backgroundColor: color ?? appColors.White },
    styles
  ]

  return (
    <TouchableOpacity style={localStyles} onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}
export default CardComponent
