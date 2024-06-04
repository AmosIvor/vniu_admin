import { IMAGES } from '@assets'
import { CircleComponent, RowComponent, SpaceComponent, TextComponent } from '@components'
import { appColors, appFonts } from '@constants'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'iconsax-react-native'
import { ReactNode } from 'react'
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native'
import { globalStyles } from 'src/styles/globalStyles'

interface Props {
  isImageBg?: boolean
  isScroll?: boolean
  title?: string
  children: ReactNode
  isBack?: boolean
  isChat?: boolean
  styles?: StyleProp<ViewStyle>
  icon?: ReactNode
  onPressRight?: () => void
}

const SQUARE_SIZE = 34

const ContainerComponent = (props: Props) => {
  const { isImageBg, isScroll, title, children, isBack, isChat, styles, icon, onPressRight } = props

  const navigation: any = useNavigation()

  const returnContainer = isScroll ? (
    <ScrollView style={{ flex: 1 }}>{children}</ScrollView>
  ) : (
    <View style={{ flex: 1 }}>{children}</View>
  )

  const headerComponent = () => {
    return (
      <View style={{ flex: 1, paddingTop: 10 }}>
        {(title || isBack) && (
          <RowComponent
            styles={[
              {
                paddingHorizontal: 16,
                paddingVertical: 8,
                minWidth: 48,
                minHeight: 48,
                paddingBottom: 14,
                borderBottomWidth: isChat ? 0.2 : 0,
                borderBottomColor: appColors.text2
              }
            ]}
          >
            {isBack && (
              <CircleComponent size={SQUARE_SIZE} onPress={() => navigation.goBack()} styles={{ zIndex: 1 }}>
                <ArrowLeft size={24} color={appColors.text} />
              </CircleComponent>
            )}

            {title && (
              <TextComponent
                text={title ?? ''}
                font={appFonts.medium}
                flex={1}
                styles={{
                  marginLeft: icon ? 0 : -SQUARE_SIZE,
                  textAlign: 'center'
                }}
                size={22}
              />
            )}

            {icon && (
              <TouchableOpacity
                style={{
                  width: SQUARE_SIZE,
                  height: SQUARE_SIZE,
                  borderRadius: 10,
                  backgroundColor: appColors.back,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onPress={onPressRight ?? (() => {})}
              >
                {icon}
              </TouchableOpacity>
            )}

            {isChat && (
              <RowComponent>
                <SpaceComponent width={16} />
                <RowComponent>
                  <CircleComponent size={48}>
                    <Image
                      source={IMAGES.avatar}
                      style={{ width: '100%', height: '100%', borderRadius: 100 }}
                      resizeMode='cover'
                    />
                  </CircleComponent>
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 100,
                      backgroundColor: '#FF5A5A',
                      position: 'absolute',
                      bottom: 0,
                      right: 2
                    }}
                  />
                </RowComponent>

                <SpaceComponent width={8} />

                <View
                  style={{
                    height: 48,
                    paddingVertical: 2,
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                  }}
                >
                  <TextComponent text='Amos Ivor' font={appFonts.medium} color={appColors.text} size={17} />
                  <TextComponent text='6 hours ago' font={appFonts.regular} color={appColors.text2} size={14} />
                </View>
              </RowComponent>
            )}
          </RowComponent>
        )}
        {returnContainer}
      </View>
    )
  }

  return isImageBg ? (
    <ImageBackground source={require('src/assets/images/splash.png')} style={{ flex: 1 }} imageStyle={{ flex: 1 }}>
      <SafeAreaView style={[globalStyles.container]}>{headerComponent()}</SafeAreaView>
    </ImageBackground>
  ) : (
    <SafeAreaView style={[globalStyles.container, styles]}>{headerComponent()}</SafeAreaView>
  )
}
export default ContainerComponent
