import React from 'react'
import { NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigation, { TabsStackParamList } from './TabsNavigator'
import ChatScreen from '@screens/chats/ChatScreen'
import SignInScreen from '@screens/auths/SignInScreen'
import SignUpScreen from '@screens/auths/SignUpScreen'

export type RootStackParamList = {
  TabsStack: NavigatorScreenParams<TabsStackParamList>
  Details: {
    id: string
  }
  ForgotPasswordScreen: undefined
  SignInScreen: undefined
  SignUpScreen: undefined
  HomeScreen: undefined
  ProductDetailScreen: undefined
  ProductSearchScreen: undefined
  ChatScreen: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName='TabsStack' screenOptions={{ headerShown: false }}>
      {/* <RootStack. name='TabsStack'>{(props) => <TabNavigation {...props} />}</RootStack.
      Screen> */}
      <RootStack.Screen name='TabsStack' component={TabNavigation} />
      <RootStack.Screen name='SignInScreen' component={SignInScreen} />
      <RootStack.Screen name='SignUpScreen' component={SignUpScreen} />
    </RootStack.Navigator>
  )
}

export default RootNavigator
