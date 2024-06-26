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
          <StatisticTodayComponent content='VISITORS' isIncreased percent={20} statistic='10' onPress={() => {}} />

          <SpaceComponent width={16} />

          <StatisticTodayComponent content='orders' isIncreased={false} percent={9} statistic='6' onPress={() => {}} />
        </RowComponent>

        <SpaceComponent height={20} />

        <RowComponent>
          <StatisticTodayComponent
            content='REVENUE'
            isIncreased={false}
            percent={7}
            statistic='17 $'
            onPress={() => {}}
          />

          <SpaceComponent width={16} />

          <StatisticTodayComponent content='Product Sold' isIncreased percent={11} statistic='10' onPress={() => {}} />
        </RowComponent>
      </SectionComponent>

      {/* month */}
      <SectionComponent styles={{ paddingBottom: 10 }}>
        <TextComponent text='This month' font={appFonts.medium} size={19} color={appColors.text} />
      </SectionComponent>

      {/* month statistic */}
      <SectionComponent>
        <StatisticMonthComponent title='Top Revenue Product' content='Polo' onPress={() => {}} />

        <SpaceComponent height={10} />

        <StatisticMonthComponent title='Top Volume Product' content='Shorts' onPress={() => {}} />
      </SectionComponent>
    </ContainerComponent>
  )
}
export default StatisticScreen
