import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screens/MainScreen';

import MatchingWaitDetailScreen from './src/screens/MatchingWaitDetailScreen.js';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MypageScreen from './src/screens/MypageScreen';


const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="MatchingWaitDetail" component={MatchingWaitDetailScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <Stack.Screen name="MypageScreen" component={MypageScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
