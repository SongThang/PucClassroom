import React from 'react';
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from 'react-navigation';

import Icon from 'react-native-vector-icons/Octicons'

import HomeScreen from '../screen/home'
import AssignmentScreen from '../screen/assignment'
import GradeScreen from '../screen/grade'
import ProfileScreen from '../screen/profile'
import DetailScreen from '../screen/details'
import LoginScreen from '../screen/login'
import WelcomeScreen from '../screen/welcome'
const HomeTab = createStackNavigator({
  HomeStack: {
    screen: HomeScreen,
    navigationOptions: { header: null, headMode: 'none' }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      header: null, headMode: 'none',
      tabBarVisible: null,  tabBarVisible: 'none',

    },
    tabBarVisible: false,
    
  },
  Details:{
    screen: DetailScreen,
    navigationOptions: {
      header: null, headMode: 'none'

    },
  }
  })
const TabNavigation = createBottomTabNavigator({
  Home: HomeTab,
  Assignment: AssignmentScreen,
  Grade: GradeScreen,
  // Profile: ProfileScreen,
}, {
    defaultNavigationOptions: ({ navigation }) => ({

      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        //   let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        }
        else if (routeName === 'Assignment') {
          iconName = `calendar`;
        }
        else if (routeName === 'Grade') {
          iconName = `settings`;
        }
        else if (routeName === 'Profile') {
          iconName = `user`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={32} color={tintColor} />;
      },
    }),

    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#2b2b2b',
      inactiveTintColor: 'gray',
      showLabel: false,
      style: {
        paddingHorizontal: 65,

      }

    },

    animationEnabled: true,
    swipeEnabled: true,

  });
  const AppStack = createSwitchNavigator({
    Welcome:WelcomeScreen,
    Login: LoginScreen,
    Navigation:TabNavigation
  })

export default createAppContainer(AppStack);