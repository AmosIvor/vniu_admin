import { orderApi, paymentApi } from '@apis'
import { OrderRequest } from '@appTypes/order.type'
import { ButtonComponent, ContainerComponent, SectionComponent, SpaceComponent } from '@components'
import { appPaymentType, appShippingMethod } from '@constants'
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

  const orderMutation = useMutation({
    mutationFn: orderApi.createOrder
  })

  const orderLineMutation = useMutation({
    mutationFn: orderApi.createOrderLine
  })

  const handleCreateOrder = async () => {
    // must have order
    // create order first
    console.log('date', new Date().toISOString())
    const res = await orderMutation.mutateAsync(
      {
        paymentType: appPaymentType.Paypal,
        body: {
          orderCreateAt: new Date().toISOString(),
          orderUpdateAt: new Date().toISOString(),
          orderTotal: 16,
          orderNote: 'Nothing',
          orderStatusId: 1, // default 1
          shippingMethodId: appShippingMethod.Express,
          address: '43 Tan Lap, Dong Hoa, Di An, Binh Duong',
          username: 'amosivor',
          numberPhone: '0332541732',
          userId: 'CS0001'
        }
      },
      {
        onSuccess: (data) => {
          console.log('SUCCESS when call order')
          console.log(data.data.data)
        },
        onError: (error) => {
          console.log('ERROR order: ', error)
        }
      }
    )

    console.log('response order: ', res.data.data)

    // generate order id
    const orderData = res.data.data

    // call api add orderline
    // const resOrderLine = await orderLineMutation.mutateAsync(
    //   {
    //     orderId: orderData.orderId,
    //     quantity: 4,
    //     price: 5,
    //     productItemId: 205,
    //     variationId: 2
    //   },
    //   {
    //     onSuccess: (data) => {
    //       console.log('SUCCESS when call order line')
    //       console.log(data.data.data)
    //     },
    //     onError: (error) => {
    //       console.log('ERROR order line: ', error)
    //     }
    //   }
    // )
    // add payment type
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

        <SpaceComponent height={40} />
        <ButtonComponent text='Order' type='primary' onPress={handleCreateOrder} />
      </SectionComponent>
    </ContainerComponent>
  )
}
export default WarehouseScreen
