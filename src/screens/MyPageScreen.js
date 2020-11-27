

import React, { useContext, useEffect, useState } from 'react';
import { Button, View, Text, Switch, Image, StyleSheet, Alert, ScrollView } from 'react-native';
import { api } from '../api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/native';
import { AuthContext } from '../context';
import { TouchableOpacity } from 'react-native-gesture-handler';

async function getProfile(setAccount) {
  try {
    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': token
      }
    }
    const res = await api.get('/api/accounts/profile', config);
    setAccount(res.data);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}


const MyPageScreen = ({ navigation }) => {
  const [account, setAccount] = useState(null);
  const isFocused = useIsFocused();
  const { signOut } = useContext(AuthContext);


  useEffect(() => {
    getProfile(setAccount);
  }, [isFocused])

  if (account) {
    return (
      <ScrollView>

        <View style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: account.image,
            }}

            style={styles.image}
          />
          <View style={styles.profileWrapper}>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditMyInformation', {
                screen: 'Mypage',
                params: account
              })}
            >
              <Text
                style={styles.button}
              >내 정보 수정</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('MyPage')}
            >
              <Text
                style={styles.button}
              >비밀번호변경</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => signOut()}
            >
              <Text
                style={styles.button}
              >로그아웃</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: "65%" }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.font}>{`이름 : ${account.name || ""}`}</Text>
              <Text style={{...styles.font}}>{`포지션 : ${account.position || ""}`}</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.font}>{`생년월일 : ${account.birth || ""}`}</Text>
              <Text style={styles.font}>{`키 : ${account.height || ""}`}</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.font}>{`지역 : ${account.state || ""}`}</Text>
              <Text style={styles.font}>{`지역 : ${account.district || ""}`}</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.font}>{`몸무게 : ${account.weight || ""}`}</Text>
              <Text style={styles.font}>{`주발 : ${account.foot || ""}`}</Text>
            </View><Text></Text>
          </View>
          {
             account.team === null ?
             <Text style={{fontSize :30, marginTop : 50}}>Team 없음 </Text>

                           
               :
               //<Text style={{fontSize :30, marginTop : 50}}>Team 있음</Text>
               <Button 
               title ={" 팀 정보 보기 "}
               onPress={() => navigation.navigate('MyTeamDetailScreen', {id: account.team.id})} 
               />
           }

        </View>

      </ScrollView >

    );
  } else {
    return <Text>Loading</Text>
  }
}



const styles = StyleSheet.create({
  image: {
    height: 160,
    width: 160,
    borderWidth: 0.5,
    borderColor: "black",
    marginTop: 30
  },
  profileWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "70%"
  },
  button: {
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
    color: "#00008B"
  },
  font: {
    fontSize: 14,
    marginTop: 20,
    flex: 1,
    marginLeft : 35
  },

});


export default MyPageScreen;