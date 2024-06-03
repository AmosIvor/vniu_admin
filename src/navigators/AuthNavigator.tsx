import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ForgotPasswordScreen, SignInScreen, SignUpScreen } from '@screens/auths'

type RootStackParamList = {
  SignInScreen: undefined
  SignUpScreen: undefined
  ForgotPasswordScreen: undefined
}

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='SignInScreen' component={SignInScreen} />
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
      <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
    </Stack.Navigator>
  )
}
export default AuthNavigator
