import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MatchingWaitDetailScreen from './src/screens/MatchingWaitDetailScreen.js';
import MyPageScreen from './src/screens/MyPageScreen';
import MatchListScreen from './src/screens/MatchListScreen';
import MatchingCreateScreen from './src/screens/MatchingCreateScreen';


const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="MatchingWaitDetail" component={MatchingWaitDetailScreen} />
        <Stack.Screen name="MyPage" component={MyPageScreen}/>
        <Stack.Screen name="MatchList" component={MatchListScreen} />
        <Stack.Screen name="MatchingCreate" component={MatchingCreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
