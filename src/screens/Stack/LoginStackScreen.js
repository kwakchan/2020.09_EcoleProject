import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginScreen,
  SignUpScreen,
  FindEmailScreen,
  FindPwScreen,
} from "../";

const LoginStack = createStackNavigator();

export default LoginStackScreen = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={LoginScreen} />
      <LoginStack.Screen name="SignUp" component={SignUpScreen} />
      <LoginStack.Screen name="FindEmail" component={FindEmailScreen} />
      <LoginStack.Screen name="FindPw" component={FindPwScreen} />
    </LoginStack.Navigator>
  );
}