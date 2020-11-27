import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  MatchingDetailScreen,
  MatchingListScreen,
  MatchingCreateScreen,
  MatchingModifyScreen,
  MatchingRequestScreen
} from "../";

const MatchingStack = createStackNavigator();

export default MypageStackScreen = () => {
  return (
    <MatchingStack.Navigator>
      <MatchingStack.Screen name="MatchingList" component={MatchingListScreen} />
      <MatchingStack.Screen name="MatchingCreate" component={MatchingCreateScreen} />
      <MatchingStack.Screen name="MatchingModify" component={MatchingModifyScreen} />
      <MatchingStack.Screen name="MatchingRequest" component={MatchingRequestScreen} />
      <MatchingStack.Screen name="MatchingDetail" component={MatchingDetailScreen} />
    </MatchingStack.Navigator>
  );
}