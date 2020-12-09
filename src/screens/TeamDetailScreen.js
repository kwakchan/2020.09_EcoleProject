import React, {useState, useEffect} from "react";
import { Text, Image, View, StyleSheet, Alert} from "react-native";
import { Button, ListItem, Icon } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import { api } from '../api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
// import Icon from 'react-native-vector-icons/FontAwesome';

async function applystatus(setUserinfo) {
  try {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token
      }
    }
    const res = await api.get("/api/applications/accounts", config);
    setUserinfo(res.data); 
  } catch (error) {
    console.log(error)
  }
}

async function applyteam(data) {
  try {
      const token = await AsyncStorage.getItem('token');
      const config = {
          headers: {
              'Authorization': token
          }
      }
      const res = await api.post('/api/applications/accounts', data, config);
      console.log(res);
  } catch (err) {
      console.log(err);
  }
}

const TeamDetailScreen = ({route, navigation}) => {
  const { id, name, logopath, state, district, description } = route.params;
  const [userinfo, setUserinfo ] = useState('');
  useEffect(() => {
    applystatus(setUserinfo);
  }, [])

  console.log(userinfo)

  const applyButtonAlert = () =>
    Alert.alert(
      "팀 가입 신청",
      name + "팀 가입을 신청하시겠습니까?",
      [
        {
          text: "취소",
          onPress: () => console.log("팀 가입 신청 취소"),
          style: "cancel"
        },
        { text: "확인", onPress: () => {
          console.log("팀 가입 신청 완료")
          const data = {
            teamId: id
          }
          applyteam(data);
          console.log(data)
          //userinfo = useState(true)
          }
        }
      ],
      { cancelable: false }
    );

  const cancelButtonAlert = () =>
    Alert.alert(
      "팀 가입 취소",
      name + "팀 가입을 취소하시겠습니까?",
      [
        {
          text: "취소",
          onPress: () => console.log("팀 가입 신청 유지"),
          style: "cancel"
        },
        { text: "확인", onPress: () => console.log("팀 가입 신청 취소 완료") }
      ],
      { cancelable: false }
    );

  return (
    <ScrollView style={styles.background}>
      {/* 팀로고(이미지) + 팀이름(텍스트) */}
      <View style={styles.teamprofile}>
        <Image source={{uri: logopath}} style={{width:100, height:100, borderRadius: 150/2}} />
        <View style={{flexDirection:'column'}}>
          <Text styles={styles.teamname} style={{fontSize:20}}>{name}</Text>
        </View>
      </View>


      {/* 설명 */}
      <View style={{marginBottom:30}}>
        <ListItem bottomDivider>
          <Icon name='room' />
          <ListItem.Content>
            <ListItem.Title >지역</ListItem.Title>
            <ListItem.Subtitle >{state} {district}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider>
          <Icon name='info' />
          <ListItem.Content>
            <ListItem.Title >설명</ListItem.Title>
            <ListItem.Subtitle >{description}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </View>


      {/* 멤버 목록 페이지로 이동하는 버튼 */}
      <View style={{marginBottom:30}}>
        <Button
          onPress={() => {navigation.navigate('TeamMember', 
          {id: id}); 
          }}
          title="팀원 목록"
          type="outline"
        />
      </View>

      {/* 신청/취소 버튼 */}
      <View style={styles.oxbutton}>
        {
          id === ''
          ? <>
          <Button
            onPress={applyButtonAlert}
            title="신청"
          />
          <Button
          onPress={cancelButtonAlert}
          title="취소"
          //disabled
          />
          </>

          : <>
          <Button
            onPress={applyButtonAlert}
            title="신청"
            //disabled
          />
          <Button
            onPress={cancelButtonAlert}
            title="취소"
          />
          </>
        }
      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  background: {
    margin:30
  },
  teamprofile: {
    margin:20,
    alignItems:'center'
  },
  teamname: {
    marginLeft:10,
    alignContent:'center',
    fontWeight:'bold',
    textAlign:'center',
    alignSelf:'center'
  },
  oxbutton: {
    marginTop:30,
    marginBottom:30
  }
});

export default TeamDetailScreen;