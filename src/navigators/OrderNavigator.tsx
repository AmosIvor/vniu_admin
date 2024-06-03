import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OrderScreen } from '@screens/orders'

type RootStackParamList = {
  OrderScreen: undefined
}

const OrderNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='OrderScreen' component={OrderScreen} />
    </Stack.Navigator>
  )
}
export default OrderNavigator
