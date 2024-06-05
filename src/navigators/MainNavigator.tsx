import { HomeNavigator, TabsNavigator } from '@navigators'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NotFoundScreen from '@screens/NotFoundScreen'

type RootStackParamList = {
  MainScreen: undefined
  NotFoundScreen: undefined

  HomeNavigator: undefined
}

const MainNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='MainScreen' component={TabsNavigator} />
      <Stack.Screen name='NotFoundScreen' component={NotFoundScreen} />

      <Stack.Screen name='HomeNavigator' component={HomeNavigator} />
    </Stack.Navigator>
  )
}
export default MainNavigator
