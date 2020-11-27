import React, { useEffect, useReducer, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
MainScreen,
LoginScreen,
SignUpScreen,
MatchingDetailScreen,
MyPageScreen,
MatchingListScreen,
MatchingCreateScreen,
EditMyInformation,
EditTeamInformation,
TeamDetailScreen,
TeamCreateScreen,
BoardCreateScreen,
BoardDetailScreen,
BoardModifyScreen,
TeamListScreen,
BoardListScreen,
TeamMemberScreen,
FindEmailScreen,
FindPwScreen,
CreateNewPwScreen,
MatchingModifyScreen,
MatchingRequestScreen
} from "./src/screens";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./src/context";
import { api } from "./src/api";


const Stack = createStackNavigator();
const {Provider} = AuthContext;

export default App = () => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };
    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        try {
          const res = await api.post("/api/login", data);
          const token = res.data.token;
          await AsyncStorage.setItem("token", token);
          console.log("토큰 저장 성공");
          dispatch({ type: 'SIGN_IN', token: token });
          console.log("로그인 성공");
        } catch (err) {
          console.log("로그인 실패");
        }
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("token");
          console.log("토큰 삭제 성공");
          dispatch({ type: 'SIGN_OUT' });
          console.log("로그아웃");
        } catch (err) {
          console.log("토큰 삭제 실패");
        }
      },
      signUp: async data => {
        try {
          await api.post("/api/accounts", data);
          console.log("회원가입 성공");
        } catch (err) {
          console.log("회원가입 실패");
        }
      },
    }),
    []
  );

  return (
    <Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.userToken == null ?
            (
              <>
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="MatchingDetail" component={MatchingDetailScreen} />
                <Stack.Screen name="MyPage" component={MyPageScreen} />
                <Stack.Screen name="MatchingList" component={MatchingListScreen} />
                <Stack.Screen name="MatchingCreate" component={MatchingCreateScreen} />
                <Stack.Screen name="MatchingModify" component={MatchingModifyScreen} />
                <Stack.Screen name="MatchingRequest" component={MatchingRequestScreen} />
                <Stack.Screen name="EditMyInformation" component={EditMyInformation} />
                <Stack.Screen name="EditTeamInformation" component={EditTeamInformation} />
                <Stack.Screen name="TeamDetail" component={TeamDetailScreen} />
                <Stack.Screen name="BoardDetail" component={BoardDetailScreen} />
                <Stack.Screen name="TeamList" component={TeamListScreen} />
                <Stack.Screen name="BoardList" component={BoardListScreen} />
                <Stack.Screen name="TeamMember" component={TeamMemberScreen} />
                <Stack.Screen name="TeamCreate" component={TeamCreateScreen} />
                <Stack.Screen name="BoardCreate" component={BoardCreateScreen} />
                <Stack.Screen name="BoardModify" component={BoardModifyScreen} /> 
                
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="FindEmail" component={FindEmailScreen} />
                <Stack.Screen name="FindPw" component={FindPwScreen} />
                <Stack.Screen name="CreateNewPw" component={CreateNewPwScreen} />
              </>
            ) :
            (
              <>
                
              </>
            )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}