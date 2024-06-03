import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '@screens/homes'

type RootStackParamList = {
  HomeScreen: undefined
}

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
    </Stack.Navigator>
  )
}
export default HomeNavigator
