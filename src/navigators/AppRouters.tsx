import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ChatScreen from '@screens/chats/ChatScreen'
import { RootStackParamList } from 'src/types/screen.type'
import TabsNavigator from './TabsNavigator'
import OrderScreen from '@screens/orders/OrderScreen'
import StatisticScreen from '@screens/statistics/StatisticScreen'
const AppRouters = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <Stack.Navigator initialRouteName='TabNavigation' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='OrderScreen' component={OrderScreen} />
      <Stack.Screen name='ChatScreen' component={ChatScreen} />
      <Stack.Screen name='StatisticScreen' component={StatisticScreen} />
      <Stack.Screen name='TabNavigation' component={TabsNavigator} />
    </Stack.Navigator>
  )
}
export default AppRouters
