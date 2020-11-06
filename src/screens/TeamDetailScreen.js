import React from "react";
import { Text, Image, View, StyleSheet, Button, Alert} from "react-native";
import { ListItem, Avatar } from 'react-native-elements'

const list = [
    {
      name: '김춘추',
      avatar_url: 'http://placeimg.com/50/50',
      subtitle: 'FW/160/53'
    },
    {
      name: '이순신',
      avatar_url: 'http://placeimg.com/50/50',
      subtitle: 'GK/180/72'
    },
    {
      name: '장보고',
      avatar_url: 'http://placeimg.com/50/50',
      subtitle: 'DF/165/60'
    },
    {
      name: '김유신',
      avatar_url: 'http://placeimg.com/50/50',
      subtitle: 'FW/180/73'
    },
    {
      name: '유관순',
      avatar_url: 'http://placeimg.com/50/50',
      subtitle: 'GK/195/70'
    },
  ]


const TeamDetailScreen = () => {


  const createTwoButtonAlert = () =>
    Alert.alert(
      "팀 가입 신청",
      "FC바르셀로나 팀 가입을 신청하시겠습니까?",
      [
        {
          text: "취소",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "확인", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  const createThreeButtonAlert = () =>
    Alert.alert(
      "팀 가입 취소",
      "FC바르셀로나 팀 가입을 취소하시겠습니까?",
      [
        {
          text: "취소",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "확인", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.background}>

      {/* 팀로고(이미지) + 팀이름(텍스트) */}
      <View style={styles.container}>
        <Image source={{uri: 'http://placeimg.com/100/100',}} style={{width:100, height:100}} />
        <View style={{flexDirection:'column'}}>
          <Text styles={styles.teamname} style={{fontSize:20}}>FC미슛가루</Text>
        </View>
      </View>

      {/* 상세내용 */}
      <View>
        {
            list.map((l, i) => (
            <ListItem key={i} bottomDivider>
                <Avatar source={{uri: l.avatar_url}} />
                <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            ))
        }
      </View>

      {/* 수락/거절 버튼 */}
      <View style={styles.button} >
        <Button title={"신청"} onPress={createTwoButtonAlert} color='black'/>
        <Button title={"취소"} onPress={createThreeButtonAlert} color='black'/>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  background: {
    
  },
  container: {
    margin:20,
    alignItems:'center'
  },
  teamname: {
    marginLeft:10,
    alignContent:'center',
    fontWeight:'bold',
    textAlign:'center',
    alignSelf:'center',
    fontFamily:'NanumSquareR'
  },
  button: {
    flexDirection:'row',
    alignSelf:'center',
    margin:20
  }
});

export default TeamDetailScreen;