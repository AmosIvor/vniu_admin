import { paymentApi } from '@apis'
import { appColors } from '@constants'
import { useNavigation } from '@react-navigation/native'
import { useQuery } from '@tanstack/react-query'
import queryString from 'query-string'
import { useState } from 'react'
import { ActivityIndicator, Modal, View } from 'react-native'
import WebView, { WebViewNavigation } from 'react-native-webview'

interface Props {
  webViewUrl: string | null
  setWebViewUrl: React.Dispatch<React.SetStateAction<string | null>>
  isVisible: boolean
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const baseUrl = 'http://localhost:5000/'

const ModalWebView = (props: Props) => {
  const { webViewUrl, isVisible, setIsVisible, setWebViewUrl } = props
  const [paymentResponseUrl, setPaymentResponseUrl] = useState<string>('')

  const navigation: any = useNavigation()

  const { data: paymentResponseData } = useQuery({
    queryKey: ['payment', paymentResponseUrl],
    queryFn: () => paymentApi.getPaymentResponse(paymentResponseUrl?.substring(baseUrl.length)),
    enabled: paymentResponseUrl !== ''
  })

  // console.log('payment response', paymentResponseData)

  const onUrlChange = (webViewState: WebViewNavigation) => {
    console.log('web view state: ', webViewState)
    // handle url

    if (webViewState.url.includes('http://localhost:5000/api')) {
      setPaymentResponseUrl(webViewState.url)
      const urlValues = queryString.parse(webViewState.url)
      console.log('url values: ', urlValues)

      if (urlValues.success === '1') {
        clearWebViewState()
      } else {
        console.log('error')
      }
    }
  }

  const clearWebViewState = () => {
    setWebViewUrl(null)
    setIsVisible(false)
    navigation.navigate('HomeNavigator', { screen: 'DonePaymentScreen' })
  }

  return (
    <Modal visible={isVisible} style={{ flex: 1 }} transparent animationType='slide' statusBarTranslucent>
      <View style={{ flex: 1, paddingTop: 32 }}>
        <WebView
          source={{
            uri: `${webViewUrl}`
          }}
          onNavigationStateChange={onUrlChange}
          startInLoadingState
          renderLoading={() => <ActivityIndicator color={appColors.black} size={40} style={{ flex: 1 }} />}
        />
      </View>
    </Modal>
  )
}
export default ModalWebView
