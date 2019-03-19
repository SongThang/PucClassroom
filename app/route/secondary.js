import React from 'react';
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createMaterialTopTabNavigator,
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