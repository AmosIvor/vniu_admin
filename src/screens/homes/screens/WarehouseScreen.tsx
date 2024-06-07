import { paymentApi } from '@apis'
import { ButtonComponent, ContainerComponent, SectionComponent } from '@components'
import { ModalWebView } from '@modals'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

const WarehouseScreen = ({ navigation }: any) => {
  const [isShowModalWebView, setIsShowModalWebView] = useState(false)
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null)

  const createPaymentMutation = useMutation({
    mutationFn: paymentApi.createPaymentUrl
  })

  const handlePayment = () => {
    createPaymentMutation.mutate(
      {
        orderTotal: 15,
        orderDescription: 'Nice to have',
        userId: 'CS0001',
        isVnPay: true
      },
      {
        onSuccess: async (data) => {
          const url = data.data.data
          console.log('url: ', url)
          setPaymentUrl(url)
          setIsShowModalWebView(true)
        },
        onError: (error) => {
          console.log(error)
        }
      }
    )
  }

  return (
    <ContainerComponent title='Test Payment' isBack>
      <SectionComponent>
        <ButtonComponent text='Payment' type='primary' onPress={handlePayment} />
        <ModalWebView
          webViewUrl={paymentUrl}
          isVisible={isShowModalWebView}
          setIsVisible={setIsShowModalWebView}
          setWebViewUrl={setPaymentUrl}
          orderId={1}
        />
      </SectionComponent>
    </ContainerComponent>
  )
}
export default WarehouseScreen
