import { ButtonComponent, RowComponent, SpaceComponent, TextComponent } from '@components'
import { appColors, appFonts, appInfors, appOrderStatusArray } from '@constants'
import { Modal, TouchableWithoutFeedback, View } from 'react-native'

interface Props {
  isVisible: boolean
  handleSubmit?: () => void
  orderStatus: number
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalAlert = (props: Props) => {
  const { isVisible, handleSubmit, orderStatus, setIsVisible } = props
  const widthButton = (appInfors.sizes.WIDTH * 0.9 - 20 * 2 - 20) / 2

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
              width: appInfors.sizes.WIDTH * 0.9,
              backgroundColor: appColors.White,
              padding: 20,
              paddingBottom: 10,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {orderStatus !== 3 && (
              <TextComponent
                text={`Are you sure you want to update the order status to ${appOrderStatusArray[orderStatus + 1]}?`}
                flex={0}
                color={appColors.black}
                font={appFonts.regular}
                size={18}
              />
            )}
            {orderStatus === 3 && (
              <TextComponent
                text={`Are you sure you want to complete this order ?`}
                flex={0}
                color={appColors.black}
                font={appFonts.regular}
                size={18}
              />
            )}
            <SpaceComponent height={20} />
            <RowComponent styles={{ width: appInfors.sizes.WIDTH * 0.9 - 20 * 2 }}>
              <ButtonComponent
                type='primary'
                text='Cancel'
                color={appColors.SilverSand}
                textColor={appColors.text}
                onPress={() => setIsVisible(false)}
                styles={{ width: widthButton, minHeight: 48 }}
              />
              <SpaceComponent width={20} />
              <ButtonComponent
                type='primary'
                text='Update'
                styles={{ width: widthButton, minHeight: 48 }}
                onPress={handleSubmit}
              />
            </RowComponent>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
export default ModalAlert
