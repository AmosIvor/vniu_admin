import { CircleComponent, RowComponent, SpaceComponent, TextComponent } from '@components'
import { appColors, appFonts, appInfors } from '@constants'
import { ArrowRight2, Category } from 'iconsax-react-native'
import { ReactNode } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
  icon?: ReactNode
  title?: string
  bgColor?: string
  onPress?: () => void
}

const ManagingAreaComponent = (props: Props) => {
  const { icon, title, bgColor, onPress } = props
  const widthCalculate = (appInfors.sizes.WIDTH - 16 * 2 - 16) / 2

  return (
    <TouchableOpacity
      style={[
        {
          paddingVertical: 12,
          paddingHorizontal: 14,
          width: widthCalculate,
          borderRadius: 16,
          backgroundColor: bgColor ?? appColors.primary
        },
        styles.shadow
      ]}
      activeOpacity={0.9}
      onPress={onPress ?? (() => {})}
    >
      <CircleComponent size={40} styles={{ backgroundColor: appColors.White }}>
        <Category size='24' color={appColors.primary} />
      </CircleComponent>

      <SpaceComponent height={16} />

      <RowComponent>
        <TextComponent text={title ?? 'Products'} font={appFonts.regular} size={20} color={appColors.White} flex={1} />

        {icon ?? <ArrowRight2 style={{ marginRight: -6 }} size={22} color={appColors.White} />}
      </RowComponent>
    </TouchableOpacity>
  )
}
export default ManagingAreaComponent

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'rgba(0, 0, 0)',
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowOpacity: 1,
    elevation: 10
  }
})
