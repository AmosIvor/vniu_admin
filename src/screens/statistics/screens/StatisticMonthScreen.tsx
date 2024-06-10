import { ContainerComponent, SectionComponent, TextComponent } from '@components'
import { appColors, appFonts } from '@constants'
import { View, Text } from 'react-native'
import { StatisticMonthComponent } from '@screens/statistics/components'
const StatisticMonthScreen = ({ navigation, route }: any) => {
  return (
    <ContainerComponent isBack title={`${route.params.title}`}>
      {/* overview */}
      <SectionComponent styles={{ paddingBottom: 10 }}>
        <TextComponent text='Overview' font={appFonts.medium} size={19} color={appColors.text} />
      </SectionComponent>

      <SectionComponent>
        <StatisticMonthComponent title={route.params.title} content={route.params.content} isNext={false} />
      </SectionComponent>

      {/* statistic */}
      <SectionComponent styles={{ paddingBottom: 10 }}>
        <TextComponent text='Statistics' font={appFonts.medium} size={19} color={appColors.text} />
      </SectionComponent>
    </ContainerComponent>
  )
}
export default StatisticMonthScreen
