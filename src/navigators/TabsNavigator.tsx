import { RowComponent, TextComponent } from '@components'
import { appColors, appFonts } from '@constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LogoutScreen } from '@screens/auths'
import { ChatScreen } from '@screens/chats'
import { HomeScreen } from '@screens/homes'
import { OrderScreen } from '@screens/orders'
import { StatisticScreen } from '@screens/statistics'
import { Bag2, Chart21, Home2, LogoutCurve, Message } from 'iconsax-react-native'
import React from 'react'
import { StyleSheet, View } from 'react-native'

type TabsStackParamList = {
  HomeTab: undefined
  OrderTab: undefined
  ChatTab: undefined
  StatisticTab: undefined
  LogoutTab: undefined
}

const TabsNavigator = () => {
  const Tab = createBottomTabNavigator<TabsStackParamList>()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: appColors.White,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 70,
          justifyContent: 'center',
          alignItems: 'center'
        },

        tabBarIcon: ({ focused, size, color }) => {
          color = focused ? appColors.White : appColors.Black
          size = focused ? 16 : 21
          let icon = <Home2 variant={focused ? 'Bold' : 'Outline'} size={size} color={color} />
          let name = 'Home'
          switch (route.name) {
            case 'OrderTab':
              icon = <Bag2 variant={focused ? 'Bold' : 'Outline'} size={size} color={color} />
              name = 'Order'
              break

            case 'ChatTab':
              icon = <Message variant={focused ? 'Bold' : 'Outline'} size={size} color={color} />
              name = 'Chat'
              break

            case 'StatisticTab':
              icon = <Chart21 variant={focused ? 'Bold' : 'Outline'} size={size} color={color} />
              name = 'Statistic'
              break

            case 'LogoutTab':
              icon = <LogoutCurve variant={focused ? 'Bold' : 'Outline'} size={size} color={color} />
              name = 'Logout'
              break

            default:
              icon = <Home2 variant={focused ? 'Bold' : 'Outline'} size={size} color={color} />
              name = 'Home'
          }
          return (
            <RowComponent
              styles={
                focused
                  ? {
                      backgroundColor: appColors.statistic,
                      height: 30,
                      borderRadius: 100
                    }
                  : undefined
              }
            >
              <View style={focused ? styles.iconContainer : undefined}>{icon}</View>
              {focused && (
                <TextComponent
                  styles={{
                    paddingHorizontal: 6,
                    fontSize: 11,
                    fontFamily: appFonts.medium
                  }}
                  text={name}
                />
              )}
            </RowComponent>
          )
        }
      })}
    >
      <Tab.Screen name='HomeTab' component={HomeScreen} />
      <Tab.Screen name='OrderTab' component={OrderScreen} />
      <Tab.Screen name='ChatTab' component={ChatScreen} />
      <Tab.Screen name='StatisticTab' component={StatisticScreen} />
      <Tab.Screen name='LogoutTab' component={LogoutScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 30,
    height: 30,
    backgroundColor: appColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  }
})

export default TabsNavigator
