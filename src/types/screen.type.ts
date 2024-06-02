import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  ForgotPasswordScreen: undefined
  SignInScreen: undefined
  SignUpScreen: undefined
  HomeScreen: undefined
  OrderScreen: undefined
  ChatScreen: undefined
  StatisticScreen: undefined

  TabNavigation: undefined
}

export type HomeScreenProp = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>

export type OrderScreenProp = NativeStackScreenProps<RootStackParamList, 'OrderScreen'>

export type ChatScreenProp = NativeStackScreenProps<RootStackParamList, 'ChatScreen'>

export type StatisticScreenProp = NativeStackScreenProps<RootStackParamList, 'StatisticScreen'>

export type TabNavigation = NativeStackScreenProps<RootStackParamList, 'TabNavigation'>
