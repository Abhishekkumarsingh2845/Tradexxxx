import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenName from '../Constants/ScreenName';

import Login from '../Screens/Login';
import OtpVerification from '../Screens/OtpVerification';
import ForgotPassword from '../Screens/ForgotPassword';
import NewPassword from '../Screens/NewPassword';
import CreateAccount from '../Screens/CreateAccount';

const Stack = createStackNavigator();

const AuthNavigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenName.Login}
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenName.OtpVerification}
          component={OtpVerification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenName.ForgotPassword}
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name={ScreenName.NewPassword}
        component={NewPassword}
        options={{headerShown: false}}
        />
        <Stack.Screen  
        name={ScreenName.createAccount}
        component={CreateAccount}
        options={{headerShown: false}}
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigations;
