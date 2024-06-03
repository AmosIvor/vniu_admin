import { TabsNavigator } from '@navigators'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NotFoundScreen from '@screens/NotFoundScreen'

type RootStackParamList = {
  HomeScreen: undefined
  ChatScreen: undefined
  OrderScreen: undefined
  StatisticScreen: undefined
  NotFoundScreen: undefined
  MainScreen: undefined
}

const MainNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='MainScreen' component={TabsNavigator} />
      <Stack.Screen name='NotFoundScreen' component={NotFoundScreen} />
    </Stack.Navigator>
  )
}
export default MainNavigator
