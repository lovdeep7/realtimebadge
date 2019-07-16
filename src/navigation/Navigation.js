import React from 'react';
import { View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Badge, Icon, withBadge } from 'react-native-elements'
import PropTypes from 'prop-types';

import { Messages } from './Messages';

import AppStyles from '../styles/Styles';
import Empty from "../screens/Empty";

const MessagesBadge = withBadge(5)(Icon)

const MessagesIcon = ({ tintColor }) => (
  <MessagesBadge
    type="ionicon"
    name="ios-chatbubbles"
    size={24}
    color={tintColor}
  />
);

const UsersIcon = ({ tintColor }) => (
  <Icon
    type="material"
    name="supervisor-account"
    size={24}
    color={tintColor}
  />
);

const DiscoverIcon = ({ tintColor }) => (
  <Icon
    type="ionicon"
    name="md-compass"
    size={24}
    color={tintColor}
  />
);

const BottomTabNavigation = createBottomTabNavigator({
  MessagesScreen: {
    screen: Messages,
    navigationOptions: {
      header: null,
      tabBarIcon: MessagesIcon
    }
  },
  UsersScreen: {
    screen: Empty,
    navigationOptions: ({ screenProps, navigation }) => ({
      header: null,
      tabBarIcon: () => (
        <View>
          <Icon
            type="material"
            name="supervisor-account"
            size={24}
          />

          <Badge
            value={screenProps.userCount}
            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
          />
      </View>
      )
    })
  },
  DiscoverScreen: {
    screen: Empty,
    navigationOptions: {
      header: null,
      tabBarIcon: DiscoverIcon
    }
  }
},
{
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#0084ff',
    inactiveTintColor: AppStyles.colors.inactiveGreyColor,
    pressColor: '#7f8c8d'
  }
});


const Navigation = createAppContainer(BottomTabNavigation);

export default Navigation;