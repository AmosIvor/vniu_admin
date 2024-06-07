import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OrderDetailScreen, OrderSearchScreen } from '@screens/orders/screens'

type RootStackParamList = {
  OrderDetailScreen: undefined
  OrderSearchScreen: undefined
}

const OrderNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='OrderDetailScreen' component={OrderDetailScreen} />
      <Stack.Screen name='OrderSearchScreen' component={OrderSearchScreen} />
    </Stack.Navigator>
  )
}
export default OrderNavigator
