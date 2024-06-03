import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '@screens/homes'
import { CatelogScreen, CommentScreen, ProductScreen, WarehouseScreen } from '@screens/homes/screens'

type RootStackParamList = {
  HomeScreen: undefined

  ProductScreen: undefined
  CatelogScreen: undefined
  CommentScreen: undefined
  WarehouseScreen: undefined
}

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />

      <Stack.Screen name='ProductScreen' component={ProductScreen} />
      <Stack.Screen name='CatelogScreen' component={CatelogScreen} />
      <Stack.Screen name='CommentScreen' component={CommentScreen} />
      <Stack.Screen name='WarehouseScreen' component={WarehouseScreen} />
    </Stack.Navigator>
  )
}
export default HomeNavigator
