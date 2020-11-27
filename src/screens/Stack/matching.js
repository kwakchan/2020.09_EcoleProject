//마이페이지-팀 상세

import React from "react";
import { Text, Image, View, StyleSheet, Alert} from "react-native";
import { Button, ListItem, Icon } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

// import Icon from 'react-native-vector-icons/FontAwesome';

const TeamDetailScreen = ({route, navigation}) => {
  const { team_name } = route.params;

  const exitButtonAlert = (team_name) =>
    Alert.alert(
      "팀 탈퇴",
      `팀을 탈퇴하시겠습니까?`,
      [
        {
          text: "취소",
          onPress: () => console.log("팀 탈퇴 취소"),
          style: "cancel"
        },
        { text: "확인", onPress: () => {
            console.log(JSON.stringify(team_name)+"팀 탈퇴 성공")
            navigation.navigate('MyPage');
          }
        }
      ],
      { cancelable: false }
    );

  return (
    <ScrollView style={styles.background}>

      {/* 팀로고(이미지) + 팀이름(텍스트) */}
      <View style={styles.teamprofile}>
        <Image source={{uri: 'http://placeimg.com/100/100',}} style={{width:100, height:100, borderRadius: 150/2}} />
        <View style={{flexDirection:'column'}}>
        <Text styles={styles.teamname} style={{fontSize:20}}>{JSON.stringify(team_name)}</Text>
        </View>
      </View>

      {/* 수정_show 팀장 */}
      <View>
        <Button
          onPress={() => {
            // console.log(JSON.stringify(team_name)+"팀 정보 수정 페이지로 이동");
            navigation.navigate('EditTeamInformation')
          }}
          title="팀 정보 수정"
        />
      </View>

      {/* 설명 */}
      <View style={{marginBottom:30}}>
            <ListItem bottomDivider>
              <Icon name='info' />
              <ListItem.Content>
                <ListItem.Title >설명</ListItem.Title>
                <ListItem.Subtitle >{team_name}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
      </View>

      {/* 멤버 목록 페이지로 이동하는 버튼 */}
      <View style={{marginBottom:30}}>
        <Button
          onPress={() => {}}
          title="팀원 목록"
          type="outline"
        />
      </View>

      {/* 팀 탈퇴 */}
      <View>
        <Button
          onPress={exitButtonAlert}
          title="팀 탈퇴"
        />
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
  teaminfo: {
    backgroundColor: 'white'
  },
  oxbutton: {
    marginTop:30,
    marginBottom:30
  }
});

export default TeamDetailScreen;