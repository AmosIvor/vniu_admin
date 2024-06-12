import { IMAGES } from '@assets'
import {
  ContainerComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  StatisticOverviewComponent,
  TextComponent
} from '@components'
import { appColors, appFonts } from '@constants'
import { Notification } from 'iconsax-react-native'
import { Image, View } from 'react-native'
import { ManagingAreaComponent } from './components'

const SQUARE_SIZE = 50

const HomeScreen = ({ navigation }: any) => {
  return (
    <ContainerComponent>
      {/* Header */}
      <SectionComponent>
        <RowComponent>
          {/* Avatar */}
          <Image
            source={IMAGES.avatar}
            style={{ width: SQUARE_SIZE, height: SQUARE_SIZE, resizeMode: 'cover', borderRadius: 10 }}
          />

          <SpaceComponent width={12} />

          {/* Welcome */}
          <View style={{ flex: 1 }}>
            <TextComponent text='Hi, Amos Ivor' font={appFonts.medium} size={19} color={appColors.text} />

            <SpaceComponent height={2} />

            <TextComponent text='Be productive today' font={appFonts.regular} size={15} color={appColors.text} />
          </View>

          <SpaceComponent width={10} />

          {/* Notification */}
          <View
            style={{
              width: SQUARE_SIZE,
              height: SQUARE_SIZE,
              borderRadius: 10,
              backgroundColor: appColors.back,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Notification size='26' color={appColors.Primary} />
          </View>
        </RowComponent>
      </SectionComponent>

      {/* Overview Statistics */}
      <SectionComponent>
        <RowComponent>
          <StatisticOverviewComponent content='Today Visitors' statistic='17' percent={12} />

          <SpaceComponent width={16} />

          <StatisticOverviewComponent content='Today Orders' statistic='9' percent={25} isIncreased={false} />
        </RowComponent>
      </SectionComponent>

      {/* Managing Area */}
      <SectionComponent>
        {/* title */}
        <TextComponent text='Managing Area' font={appFonts.medium} size={19} />

        <SpaceComponent height={16} />

        <RowComponent>
          <ManagingAreaComponent
            title='Products'
            bgColor={appColors.primary}
            onPress={() => navigation.navigate('HomeNavigator', { screen: 'ProductScreen' })}
          />

          <SpaceComponent width={16} />

          <ManagingAreaComponent
            title='Catelogs'
            bgColor='#FF7F97'
            onPress={() => navigation.navigate('HomeNavigator', { screen: 'CatelogScreen' })}
          />
        </RowComponent>

        <SpaceComponent height={16} />

        <RowComponent>
          <ManagingAreaComponent
            title='Comments'
            bgColor='#8F80F3'
            onPress={() => navigation.navigate('HomeNavigator', { screen: 'CommentScreen' })}
          />

          <SpaceComponent width={16} />

          <ManagingAreaComponent
            title='Warehouses'
            bgColor='#3BE9DE'
            onPress={() => navigation.navigate('HomeNavigator', { screen: 'WarehouseScreen' })}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  )
}
export default HomeScreen
