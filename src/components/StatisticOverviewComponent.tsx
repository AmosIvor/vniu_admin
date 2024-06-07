import { RowComponent, SpaceComponent, TextComponent } from '@components'
import { appColors, appFonts, appInfors } from '@constants'
import { View } from 'react-native'
import { globalStyles } from 'src/styles/globalStyles'

interface Props {
  content?: string
  statistic?: string
  percent?: number
  isIncreased?: boolean
}

const StatisticOverviewComponent = (props: Props) => {
  const { content, statistic, percent, isIncreased = true } = props
  const widthCalculate = (appInfors.sizes.WIDTH - 16 * 2 - 16) / 2
  const percentCalculate = isIncreased ? `+${percent}%` : `-${percent}%`
  return (
    <View
      style={[
        {
          width: widthCalculate,
          borderRadius: 10,
          backgroundColor: appColors.White,
          paddingHorizontal: 12,
          paddingVertical: 8
        },
        globalStyles.shadowCustom
      ]}
    >
      <TextComponent text={content ?? 'Today Orders'} font={appFonts.medium} size={19} color={appColors.text} />

      <SpaceComponent height={10} />

      <RowComponent>
        <TextComponent text={statistic ?? '129'} font={appFonts.medium} size={28} color={appColors.text} flex={1} />

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
      </RowComponent>
    </View>
  )
}
export default StatisticOverviewComponent
