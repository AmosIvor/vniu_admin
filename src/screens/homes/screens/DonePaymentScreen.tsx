import { ContainerComponent, SectionComponent, SpaceComponent, TextComponent } from '@components'
import { appColors, appFonts } from '@constants'
import { TickSquare } from 'iconsax-react-native'
const DonePaymentScreen = () => {
  return (
    <ContainerComponent styles={{ flex: 1 }}>
      <SectionComponent styles={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TickSquare size={60} color={appColors.active} />
        <SpaceComponent height={30} />
        <TextComponent text='Payment Successfully' font={appFonts.regular} size={24} color={appColors.text} />
      </SectionComponent>
    </ContainerComponent>
  )
}
export default DonePaymentScreen
