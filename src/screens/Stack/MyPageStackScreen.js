import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  MyPageScreen,
  EditMyInformation,
  EditTeamInformation,
  CreateNewPwScreen
} from "../";

const MyPageStack = createStackNavigator();

export default MypageStackScreen = () => {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen name="MyPage" component={MyPageScreen} />
      <MyPageStack.Screen name="EditMyInformation" component={EditMyInformation} />
      <MyPageStack.Screen name="EditTeamInformation" component={EditTeamInformation} />
      <MyPageStack.Screen name="CreateNewPw" component={CreateNewPwScreen} />
    </MyPageStack.Navigator>
  );
}