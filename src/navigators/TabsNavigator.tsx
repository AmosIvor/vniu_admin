import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import React from 'react'
import CustomBottomTabs from '../components/CustomBottomTabs'
import { RootStackScreenProps } from './RootNavigator'

import ChatScreen from '@screens/chats/ChatScreen'
import HomeScreen from '@screens/homes/HomeScreen'
import OrderScreen from '@screens/orders/OrderScreen'
import StatisticScreen from '@screens/statistics/StatisticScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LogoutScreen from '@screens/auths/LogoutScreen'

export type TabsStackParamList = {
  Home: undefined
  Order: undefined
  Chat: undefined
  Statistic: undefined
  Logout: undefined
}
const TabsStack = createBottomTabNavigator<TabsStackParamList>()

export type TabsStackScreenProps<T extends keyof TabsStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabsStackParamList, T>,
  RootStackScreenProps<'TabsStack'>
>

const TabsNavigator = () => {
  return (
    <TabsStack.Navigator
      screenOptions={{
        tabBarShowLabel: false
      }}
      tabBar={(props) => <CustomBottomTabs {...props} />}
    >
      <TabsStack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return <MaterialCommunityIcons name='home' {...props} />
          }
        }}
      />

      <TabsStack.Screen
        name='Order'
        component={OrderScreen}
        options={{
          tabBarIcon(props) {
            return <MaterialCommunityIcons name='cart' {...props} />
          }
        }}
      />

      <TabsStack.Screen
        name='Chat'
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return <MaterialCommunityIcons name='chat-processing-outline' {...props} />
          }
        }}
      />

      <TabsStack.Screen
        name='Statistic'
        component={StatisticScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return <MaterialCommunityIcons name='account' {...props} />
          }
        }}
      />

      <TabsStack.Screen
        name='Logout'
        component={LogoutScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return <MaterialCommunityIcons name='robot-happy-outline' {...props} />
          }
        }}
      />
    </TabsStack.Navigator>
  )
}

export default TabsNavigator
