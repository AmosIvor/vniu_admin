import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatisticScreen } from '@screens/statistics'

type RootStackParamList = {
  StatisticScreen: undefined
}

const StatisticNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='StatisticScreen' component={StatisticScreen} />
    </Stack.Navigator>
  )
}
export default StatisticNavigator
