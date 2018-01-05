import React from 'react'
import { TabNavigator } from 'react-navigation'

import Search from '../views/Search'
import Messages from '../views/Messages'
import Channels from '../views/Channels'
import Contacts from '../views/Contacts'
import Profile from '../views/Profile'

import TabBarIcon from '../components/TabBarIcon'

// probably more navigators instead of Screens/Views
const DashboardNavigator = TabNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: <TabBarIcon screenName="Search" />
      }
    },
    Messages: {
      screen: Messages,
      navigationOptions: {
        tabBarIcon: <TabBarIcon screenName="Messages" />
      }
    },
    Channels: {
      screen: Channels,
      navigationOptions: {
        tabBarIcon: <TabBarIcon screenName="Channels" />
      }
    },
    Contacts: {
      screen: Contacts,
      navigationOptions: {
        tabBarIcon: <TabBarIcon screenName="Contacts" />
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: <TabBarIcon screenName="Profile" />
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: true
  }
)

export default DashboardNavigator
