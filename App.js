import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MatchingDetailScreen from './src/screens/MatchingDetailScreen.js';
import MyPageScreen from './src/screens/MyPageScreen';
import MatchingListScreen from './src/screens/MatchingListScreen';
import MatchingCreateScreen from './src/screens/MatchingCreateScreen';
import EditMyInformation from './src/screens/EditMyInformation';
import EditTeamInformation from "./src/screens/EditTeamInformation";
import TeamDetailScreen from "./src/screens/TeamDetailScreen";
import BoardDetailScreen from "./src/screens/BoardDetailScreen";
import TeamListScreen from "./src/screens/TeamListScreen";
import BoardListScreen from "./src/screens/BoardListScreen";
import TeamMemberScreen from "./src/screens/TeamMemberScreen";
import MatchingModifyScreen from './src/screens/MatchingModifyScreen';
import MatchingRequestScreen from './src/screens/MatchingRequestScreen';


const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="MatchingDetail" component={MatchingDetailScreen} />
        <Stack.Screen name="MyPage" component={MyPageScreen}/>
        <Stack.Screen name="MatchingList" component={MatchingListScreen} />
        <Stack.Screen name="MatchingCreate" component={MatchingCreateScreen} />
        <Stack.Screen name="EditMyInformation" component={EditMyInformation} />
        <Stack.Screen name="EditTeamInformation" component={EditTeamInformation} />
        <Stack.Screen name="TeamDetail" component={TeamDetailScreen} />
        <Stack.Screen name="BoardDetail" component={BoardDetailScreen} />
        <Stack.Screen name="TeamList" component={TeamListScreen} />
        <Stack.Screen name="BoardList" component={BoardListScreen} />
        <Stack.Screen name="TeamMember" component={TeamMemberScreen} />
        <Stack.Screen name="MatchingModify" component={MatchingModifyScreen} />
        <Stack.Screen name="MatchingRequest" component={MatchingRequestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
