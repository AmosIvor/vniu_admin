import { CardComponent, RowComponent, SpaceComponent, TextComponent } from '@components'
import { appColors } from '@constants'
import { View, Text, ViewStyle, StyleProp } from 'react-native'

interface Props {
  styles?: StyleProp<ViewStyle>
}

const OrderInformationComponent = (props: Props) => {
  const { styles } = props

  return (
    <CardComponent isShadow styles={styles}>
      <RowComponent>
        <TextComponent text='Full name:' size={17} color={appColors.text} styles={{ width: '30%' }} />
        <SpaceComponent width={10} />
        <TextComponent
          text='Tran Tuan Vu'
          size={17}
          color={appColors.text}
          styles={{ width: '60%' }}
          numberOfLine={1}
        />
      </RowComponent>

      <SpaceComponent height={10} />

      <RowComponent>
        <TextComponent text='Phone:' size={17} color={appColors.text} styles={{ width: '30%' }} />
        <SpaceComponent width={10} />
        <TextComponent
          text='0332 541 875'
          size={17}
          color={appColors.text}
          styles={{ width: '60%' }}
          numberOfLine={1}
        />
      </RowComponent>

      <SpaceComponent height={10} />

      <RowComponent styles={{ alignItems: 'flex-start' }}>
        <TextComponent text='Address:' size={17} color={appColors.text} styles={{ width: '30%' }} />
        <SpaceComponent width={10} />
        <TextComponent
          text='43 Tan Lap, Dong Hoa, Di An, Binh Duong'
          size={17}
          color={appColors.text}
          styles={{ width: '60%' }}
          numberOfLine={2}
        />
      </RowComponent>
    </CardComponent>
  )
}
export default OrderInformationComponent
