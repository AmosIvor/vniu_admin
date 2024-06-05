import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import CustomBottomTabs from '../components/CustomBottomTabs'

import { HomeNavigator, OrderNavigator, StatisticNavigator } from '@navigators'
import ChatScreen from '@screens/chats/ChatScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { LogoutScreen } from '@screens/auths'
import { HomeScreen } from '@screens/homes'

type TabsStackParamList = {
  Home: undefined
  Order: undefined
  Chat: undefined
  Statistic: undefined
  Logout: undefined
}

const TabsNavigator = () => {
  const TabsStack = createBottomTabNavigator<TabsStackParamList>()

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
        component={OrderNavigator}
        options={{
          headerShown: false,
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
            return <MaterialCommunityIcons name='account' {...props} />
          }
        }}
      />

      <TabsStack.Screen
        name='Statistic'
        component={StatisticNavigator}
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
            return <MaterialCommunityIcons name='logout' {...props} />
          }
        }}
      />
    </TabsStack.Navigator>
  )
}

export default TabsNavigator
