import { RowComponent, SpaceComponent, TextComponent } from '@components'
import { appColors, appFonts, appInfors } from '@constants'
import { useNavigation } from '@react-navigation/native'
import { capitalizeFirstLetter } from '@utils'
import { ArrowRight2 } from 'iconsax-react-native'
import { useEffect } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { globalStyles } from 'src/styles/globalStyles'

interface Props {
  content?: string
  statistic?: string
  percent?: number
  isIncreased?: boolean
  contentCompare?: string
  isCapitalizeFirstLetter?: boolean
  onPress?: () => void
}

const StatisticTodayComponent = (props: Props) => {
  const { content, statistic, percent, isIncreased = true, contentCompare, onPress, isCapitalizeFirstLetter } = props
  const widthCalculate = (appInfors.sizes.WIDTH - 16 * 2 - 16) / 2
  const percentCalculate = isIncreased ? `+${percent}%` : `-${percent}%`

  const navigation: any = useNavigation()

  return (
    <TouchableOpacity
      style={[
        {
          width: widthCalculate,
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
            screen: 'StatisticTodayScreen',
            params: {
              title: content ?? '',
              statistic: statistic ?? 0,
              percent: percent ?? 0,
              isIncreased: isIncreased
            }
          }))
      }
      activeOpacity={0.8}
    >
      <TextComponent
        text={content ? (isCapitalizeFirstLetter ? content : content.toUpperCase()) : 'ORDER'}
        font={appFonts.medium}
        size={17}
        color={appColors.text}
        numberOfLine={1}
      />

      <SpaceComponent height={4} />

      <TextComponent text={statistic ?? '129'} font={appFonts.regular} size={28} color={appColors.primary} />

      <SpaceComponent height={10} />

      <RowComponent justify='space-between'>
        <View
          style={{ paddingVertical: 2, paddingHorizontal: 8, backgroundColor: appColors.LightGray, borderRadius: 6 }}
        >
          <TextComponent
            text={percent ? percentCalculate : '+19%'}
            font={appFonts.medium}
            size={13}
            color={appColors.Primary}
          />
        </View>

        {contentCompare && (
          <TextComponent text={contentCompare} color={appColors.text} size={14} font={appFonts.regular} />
        )}

        {!contentCompare && <ArrowRight2 size={22} color={appColors.text} />}
      </RowComponent>
    </TouchableOpacity>
  )
}
export default StatisticTodayComponent
