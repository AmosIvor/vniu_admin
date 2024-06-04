import { TextComponent } from '@components'
import { ActivityIndicator, View } from 'react-native'

interface Props {
  isLoading: boolean
  values: number
  message?: string
}

const LoadingComponent = (props: Props) => {
  const { isLoading, values, message } = props

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
      }}
    >
      {isLoading ? <ActivityIndicator /> : values === 0 && <TextComponent text={message ?? 'Data not found!'} />}
    </View>
  )
}
export default LoadingComponent
