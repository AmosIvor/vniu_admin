import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatisticScreen } from '@screens/statistics'
import { StatisticMonthScreen, StatisticTodayScreen } from '@screens/statistics/screens'

type RootStackParamList = {
  StatisticTodayScreen: undefined
  StatisticMonthScreen: undefined
}

const StatisticNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='StatisticTodayScreen' component={StatisticTodayScreen} />
      <Stack.Screen name='StatisticMonthScreen' component={StatisticMonthScreen} />
    </Stack.Navigator>
  )
}
export default StatisticNavigator
