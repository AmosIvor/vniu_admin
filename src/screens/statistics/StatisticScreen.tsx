import { ContainerComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '@components'
import { appColors, appFonts } from '@constants'
import { StatisticMonthComponent, StatisticTodayComponent } from '@screens/statistics/components'
const StatisticScreen = () => {
  return (
    <ContainerComponent title='Statistics' isScroll>
      {/* today */}
      <SectionComponent styles={{ paddingBottom: 10 }}>
        <TextComponent text='Today' font={appFonts.medium} size={19} color={appColors.text} />
      </SectionComponent>

      {/* today statistic */}
      <SectionComponent>
        <RowComponent>
          <StatisticTodayComponent />

          <SpaceComponent width={16} />

          <StatisticTodayComponent />
        </RowComponent>

        <SpaceComponent height={20} />

        <RowComponent>
          <StatisticTodayComponent />

          <SpaceComponent width={16} />

          <StatisticTodayComponent />
        </RowComponent>
      </SectionComponent>

      {/* month */}
      <SectionComponent styles={{ paddingBottom: 10 }}>
        <TextComponent text='This month' font={appFonts.medium} size={19} color={appColors.text} />
      </SectionComponent>

      {/* month statistic */}
      <SectionComponent>
        <StatisticMonthComponent />

        <SpaceComponent height={10} />

        <StatisticMonthComponent />

        <SpaceComponent height={10} />

        <StatisticMonthComponent />
      </SectionComponent>
    </ContainerComponent>
  )
}
export default StatisticScreen
