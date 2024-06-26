import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  CatelogAddScreen,
  CatelogScreen,
  CommentScreen,
  DonePaymentScreen,
  ProductAddScreen,
  ProductDetailScreen,
  ProductScreen,
  ProductSearchScreen,
  WarehouseScreen
} from '@screens/homes/screens'

type RootStackParamList = {
  ProductScreen: undefined
  ProductDetailScreen: undefined
  ProductAddScreen: undefined
  ProductSearchScreen: undefined

  CatelogScreen: undefined
  CatelogAddScreen: undefined

  CommentScreen: undefined
  WarehouseScreen: undefined

  DonePaymentScreen: undefined
}

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='ProductScreen' component={ProductScreen} />
      <Stack.Screen name='ProductDetailScreen' component={ProductDetailScreen} />
      <Stack.Screen name='ProductAddScreen' component={ProductAddScreen} />
      <Stack.Screen name='ProductSearchScreen' component={ProductSearchScreen} />

      <Stack.Screen name='CatelogScreen' component={CatelogScreen} />
      <Stack.Screen name='CatelogAddScreen' component={CatelogAddScreen} />

      <Stack.Screen name='CommentScreen' component={CommentScreen} />
      <Stack.Screen name='WarehouseScreen' component={WarehouseScreen} />

      <Stack.Screen name='DonePaymentScreen' component={DonePaymentScreen} />
    </Stack.Navigator>
  )
}
export default HomeNavigator
