import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '@screens/homes'
import {
  CatelogScreen,
  CommentScreen,
  ProductAddScreen,
  ProductDetailScreen,
  ProductScreen,
  ProductSearchScreen,
  WarehouseScreen
} from '@screens/homes/screens'

type RootStackParamList = {
  HomeScreen: undefined

  ProductScreen: undefined
  CatelogScreen: undefined
  CommentScreen: undefined
  WarehouseScreen: undefined

  ProductDetailScreen: undefined
  ProductAddScreen: undefined
  ProductSearchScreen: undefined
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

      <Stack.Screen name='ProductDetailScreen' component={ProductDetailScreen} />
      <Stack.Screen name='ProductAddScreen' component={ProductAddScreen} />
      <Stack.Screen name='ProductSearchScreen' component={ProductSearchScreen} />
    </Stack.Navigator>
  )
}
export default HomeNavigator
