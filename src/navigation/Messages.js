import { Platform } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import Empty from "../screens/Empty";

import AppStyles from '../styles/Styles';

export const Messages = createMaterialTopTabNavigator({
  MessagesScreen: {
    screen: Empty,
    navigationOptions: { header: null, title: 'Messages' }
  },
  ActiveScreen: {
    screen: Empty,
    navigationOptions: { header: null, title: 'Active' }
  },
  GroupsScreen: {
    screen: Empty,
    navigationOptions: { header: null, title: 'Groups' }
  },
  CallsScreen: {
    screen: Empty,
    navigationOptions: { header: null, title: 'Calls' }
  }
},
{
  tabBarPosition: 'top',
  tabBarOptions: {
    activeTintColor: AppStyles.colors.accentColor,
    inactiveTintColor: AppStyles.colors.inactiveGreyColor,
    pressColor: AppStyles.colors.lightGreyColor,
    labelStyle: {
      fontWeight: 'bold',
      fontSize: Platform.OS === 'ios' ? 11 : 12,
      fontFamily: AppStyles.fonts.FONT_MEDIUM
    },
    indicatorStyle: {
      backgroundColor: AppStyles.colors.accentColor
    },
    style: {
      backgroundColor: 'white'
    }
  }
});