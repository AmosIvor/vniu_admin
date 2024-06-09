import { RowComponent, SpaceComponent, TextComponent } from '@components'
import { appColors, appFonts } from '@constants'
import { useNavigation } from '@react-navigation/native'
import { ArrowRight2 } from 'iconsax-react-native'
import { TouchableOpacity, View } from 'react-native'
import { globalStyles } from 'src/styles/globalStyles'

interface Props {
  title?: string
  content?: string
  isNext?: boolean
  onPress?: () => void
}

const StatisticMonthComponent = (props: Props) => {
  const { title, content, isNext = true, onPress } = props

  const navigation: any = useNavigation()

  return (
    <TouchableOpacity
      style={[
        {
          borderRadius: 10,
          backgroundColor: appColors.White,
          paddingHorizontal: 12,
          paddingVertical: 12
        },
        globalStyles.shadowCustom
      ]}
      onPress={
        onPress ??
        (() =>
          navigation.navigate('StatisticNavigator', {
            screen: 'StatisticMonthScreen',
            params: {
              title: title ?? '',
              content: content ?? '',
              isNext: false
            }
          }))
      }
      activeOpacity={0.8}
    >
      <TextComponent text={title ?? 'SHIRT TOP-SELLING'} color={appColors.text} size={17} font={appFonts.medium} />
      <SpaceComponent height={10} />
      <RowComponent justify='space-between'>
        <TextComponent text={content ?? 'Loose Shirt'} color={appColors.primary} size={19} font={appFonts.medium} />
        {isNext && <ArrowRight2 size={22} color={appColors.text} />}
      </RowComponent>
    </TouchableOpacity>
  )
}
export default StatisticMonthComponent
