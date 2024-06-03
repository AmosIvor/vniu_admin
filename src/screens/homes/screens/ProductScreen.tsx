import { ContainerComponent, SectionComponent, TextComponent } from '@components'
import { appColors } from '@constants'
import { View, Text } from 'react-native'
const ProductScreen = () => {
  return (
    <ContainerComponent isBack title='Products'>
      <SectionComponent>
        <TextComponent text='Hello' color={appColors.text} />
      </SectionComponent>
    </ContainerComponent>
  )
}
export default ProductScreen
