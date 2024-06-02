import { TextComponent } from '@components'
import { appColors, appFonts } from '@constants'
import { View } from 'react-native'
const HomeScreen = () => {
  return (
    <View>
      <TextComponent text='Home Screen' font={appFonts.regular} size={32} color={appColors.text} />
    </View>
  )
}
export default HomeScreen
