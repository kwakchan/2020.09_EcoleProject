//팀 리스트-팀 상세
import React, {useState, useEffect} from "react";
import { Text, Image, View, StyleSheet, Alert} from "react-native";
import { Button, ListItem, Icon } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import { api } from '../api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
// import Icon from 'react-native-vector-icons/FontAwesome';

async function getProfile(setAccount) {
  try {
    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        Authorization: token
      }
    }
    const res = await api.get('/api/accounts/profile', config);
    setAccount(res.data);
    // console.log(res.data)
  } catch (err) {
    console.log(err);
  }
}

//token값 유저가 가입신청한 팀목록
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
    // console.log(res.data)
  } catch (error) {
    console.log(error)
  }
}

async function applyTeam(data) {
  try {
      const token = await AsyncStorage.getItem('token');
      const config = {
          headers: {
              'Authorization': token
          }
      }
      const res = await api.post('/api/applications/accounts', data, config);
  } catch (err) {
      console.log(err);
  }
}

async function cancelTeam(data, id) {
  try {
      const token = await AsyncStorage.getItem('token');
      const config = {
          headers: {
              'Authorization': token
          }
      }
      const res = await api.put(`/api/applications/accounts/${id}/account`, data, config);
      // console.log(res.data)
  } catch (err) {
      console.log(err);
  }
}

const TeamDetailScreen = ({route, navigation}) => {
  const { id, name, logopath, state, district, description } = route.params;
  const [userinfo, setUserinfo ] = useState('');
  const [account, setAccount] = useState(null);
  useEffect(() => {
    getProfile(setAccount);
  }, [])

  useEffect(() => {
    applystatus(setUserinfo);
  }, [])

  // console.log(userinfo)

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
          applyTeam(data);
          console.log(data);
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
        { text: "확인", onPress: () => {
          console.log("팀 가입 신청 취소 완료") 
          const data = {
            applicationId: userinfo[0].id
          }
          cancelTeam(data, userinfo[0].id);
          console.log(userinfo)
          }
        }
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
              {id: id, memberId:account.id}); 
              }}
          title="팀원 목록"
          type="outline"
        />
      </View>

      {/* 신청/취소 버튼 */}
      <View style={styles.oxbutton}>
        {
          account ?
          account.team == null
          ? <>
          <Button
            onPress={applyButtonAlert}
            title="신청"
          />
          <Button
            onPress={cancelButtonAlert}
            title="취소"
          />
          </>

          : <>
          <Button
            onPress={applyButtonAlert}
            title="신청"
            disabled
          />
          <Button
            onPress={cancelButtonAlert}
            title="취소"
            disabled
          />
          </>
          :<></>
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