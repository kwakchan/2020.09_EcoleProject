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
      <LoginStack.Screen name="로그인" component={LoginScreen} />
      <LoginStack.Screen name="회원가입" component={SignUpScreen} />
      <LoginStack.Screen name="이메일 찾기" component={FindEmailScreen} />
      <LoginStack.Screen name="비밀번호 찾기" component={FindPwScreen} />
    </LoginStack.Navigator>
  );
}