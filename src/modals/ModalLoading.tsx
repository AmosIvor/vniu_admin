import { ButtonComponent, SpaceComponent, TextComponent } from '@components'
import { appFonts, appInfors } from '@constants'
import { View, Text, Modal, ActivityIndicator, TouchableWithoutFeedback } from 'react-native'
import { appColors } from 'src/constants/appColors'

interface Props {
  isVisible: boolean
  message?: string
}

const ModalLoading = (props: Props) => {
  const { isVisible } = props

  return (
    <Modal visible={isVisible} style={{ flex: 1 }} transparent animationType='fade' statusBarTranslucent>
      <TouchableWithoutFeedback style={{ flex: 1 }}>
        <View
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }
          ]}
        >
          <View
            style={{
              width: appInfors.sizes.WIDTH * 0.7,
              backgroundColor: appColors.White,
              padding: 20,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ActivityIndicator color={appColors.black} size={32} />
            <SpaceComponent height={30} />
            <TextComponent text='Loading ...' flex={0} color={appColors.black} font={appFonts.regular} size={19} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
export default ModalLoading
