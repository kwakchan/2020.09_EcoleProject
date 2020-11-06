import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MatchingWaitDetailScreen from './src/screens/MatchingWaitDetailScreen.js';
import MyPageScreen from './src/screens/MyPageScreen';
import MatchingListScreen from './src/screens/MatchingListScreen';
import MatchingCreateScreen from './src/screens/MatchingCreateScreen';
import EditMyInformation from './src/screens/EditMyInformation';
import EditTeamInformation from "./src/screens/EditTeamInformation";


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
        <Stack.Screen name="MatchingList" component={MatchingListScreen} />
        <Stack.Screen name="MatchingCreate" component={MatchingCreateScreen} />
        <Stack.Screen name="EditMyInformation" component={EditMyInformation} />
        <Stack.Screen name="EditTeamInformation" component={EditTeamInformation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
