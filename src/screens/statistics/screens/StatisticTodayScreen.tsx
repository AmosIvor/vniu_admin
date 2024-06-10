import { ContainerComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '@components'
import { appColors, appFonts } from '@constants'
import { useEffect } from 'react'
import { StatisticTodayComponent } from '@screens/statistics/components'
import { capitalizeFirstLetter } from '@utils'

const StatisticTodayScreen = ({ navigation, route }: any) => {
  return (
    <ContainerComponent isBack title={`${capitalizeFirstLetter(route.params.title)} Statistic`}>
      {/* overview */}
      <SectionComponent styles={{ paddingBottom: 10 }}>
        <TextComponent text='Overview' font={appFonts.medium} size={19} color={appColors.text} />
      </SectionComponent>

      <SectionComponent>
        <RowComponent>
          <StatisticTodayComponent
            content={`Today's ${capitalizeFirstLetter(route.params.title)}`}
            isIncreased
            percent={route.params.percent}
            statistic={route.params.statistic}
            contentCompare='vs yesterday'
            isCapitalizeFirstLetter
          />

          <SpaceComponent width={16} />

          <StatisticTodayComponent
            content={`Month's ${capitalizeFirstLetter(route.params.title)}`}
            isIncreased
            percent={12}
            statistic={'195'}
            contentCompare='vs last month'
            isCapitalizeFirstLetter
          />
        </RowComponent>
      </SectionComponent>

      {/* statistics */}
      <SectionComponent styles={{ paddingBottom: 10 }}>
        <TextComponent text='Statistics' font={appFonts.medium} size={19} color={appColors.text} />
      </SectionComponent>
    </ContainerComponent>
  )
}
export default StatisticTodayScreen
