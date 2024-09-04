import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenName from '../Constants/ScreenName';
import HundredPointForm from '../Screens/App/HundredPointForm';
import PreferenceSettings from '../Screens/App/Preference';
import TradeExclusionList from '../Screens/App/TradeExclusionList';
import Notification from '../Screens/App/Notification';

import Home from '../Screens/App/DashBoard/Home';
import Portfolio from '../Screens/App/DashBoard/Portfolio';
import Setting from '../Screens/App/DashBoard/Setting';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import ImagePaths from '../Utlis/ImagePaths';
import {getTabBarHeight} from '@react-navigation/bottom-tabs/lib/typescript/src/views/BottomTabBar';
import {Color} from '../Utlis/Color';
import Profile from '../Screens/App/Profile';
import Sell from '../Screens/App/Sell';
import ClosedPortfolioDetails from '../Screens/App/ClosedPortfolioDetails';
import LivePortfolioDetails from '../Screens/App/LivePortfolioDetails';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const DashBoardTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {height: 60},
        tabBarLabelStyle: {fontSize: 11, fontWeight: 'bold', paddingBottom: 10},
      }}>
      <Tab.Screen
        name={ScreenName.home}
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: Color.black,

          tabBarIcon: ({focused}) => (
            <Image
              source={ImagePaths.homeImage}
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                alignItems: 'center',
                tintColor: focused ? Color.Primary : Color.lightgray,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenName.portfolio}
        component={Portfolio}
        options={{
          headerShown: false,
          tabBarActiveTintColor: Color.black,
          tabBarIcon: ({focused}) => (
            <Image
              source={ImagePaths.portfolioImage}
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                tintColor: focused ? Color.Primary : Color.lightgray,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenName.setting}
        component={Setting}
        options={{
          headerShown: false,
          tabBarActiveTintColor: Color.black,
          tabBarIcon: ({focused}) => (
            <Image
              source={ImagePaths.settingImage}
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                tintColor: focused ? Color.Primary : Color.lightgray,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
     <Stack.Screen
          name={ScreenName.HundredPointForm}
          component={HundredPointForm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenName.PreferenceSettings}
          component={PreferenceSettings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenName.tradeexclusionlist}
          component={TradeExclusionList}
          options={{headerShown: false}}       />
  
        <Stack.Screen
          name={ScreenName.notification}
          component={Notification}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={ScreenName.profile}
          component={Profile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={ScreenName.sell}
          component={Sell}
          options={{headerShown: false}}
        />
        <Stack.Screen
      name={ScreenName.ClosedPortfolioDetails}
      component={ClosedPortfolioDetails}
      options={{headerShown:false}}   />
        
        
      
        <Stack.Screen
        name={ScreenName.LivePortfolioDetails}
        component={LivePortfolioDetails}
        options={{headerShown:false}}
        
        />

        <Stack.Screen
          name="DashBoardTab"
          component={DashBoardTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigations;
