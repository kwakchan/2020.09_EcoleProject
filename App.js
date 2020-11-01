import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screens/MainScreen';
import AddMemberScreen from './src/screens/AddMemberScreen';
import MatchingWaitDetailScreen from './src/screens/MatchingWaitDetailScreen.js';

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="AddMember" component={AddMemberScreen} />
        <Stack.Screen name="MatchingWaitDetail" component={MatchingWaitDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
