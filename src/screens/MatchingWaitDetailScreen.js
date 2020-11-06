import React from "react";
import { Text, Image, View, StyleSheet, Button, Alert} from "react-native";
import { ListItem, Icon } from 'react-native-elements'
import { ScrollView } from "react-native-gesture-handler";

const list = [
  {
    title: '시간',
    icon: 'event',
    text: '2020년 12월 32일 오후 8시'
  },
  {
    title: '장소',
    icon: 'room',
    text: '경성대'
  },
  {
    title: '인원',
    icon: 'group',
    text: '11명'
  },
  {
    title: '설명',
    icon: 'info',
    text: '먼저 연락오는 분이랑 바로할게요'
  }
]


const MatchingWaitDetailScreen = () => {


  const createTwoButtonAlert = () =>
    Alert.alert(
      "매칭신청 수락",
      "FC바르셀로나 팀과의 매칭을 수락하시겠습니까?",
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
      "매칭신청 거절",
      "FC바르셀로나 팀과의 매칭을 거절하시겠습니까?",
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
    <ScrollView style={styles.background}>

      {/* 팀로고(이미지) + 팀이름(텍스트) */}
      <View style={styles.container}>
        <Image source={{uri: 'http://placeimg.com/100/100'}} style={{width:100, height:100}} />
        <View style={{flexDirection:'column'}}>
          <Text styles={styles.teamname} style={{fontSize:20}}>FC미슛가루</Text>
        </View>
      </View>

      {/* 상세내용 */}
      <View >
        {
          list.map((item, i) => (
            <ListItem key={i} bottomDivider>
              <Icon name={item.icon} />
              <ListItem.Content>
                <ListItem.Title >{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
              <ListItem.Content>
                <ListItem.Title style={{width:150}}>{item.text}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </View>

      {/* 수락/거절 버튼 */}
      <View style={styles.button} >
        <Button title={"수락"} onPress={createTwoButtonAlert} color='black'/>
        <Button title={"거절"} onPress={createThreeButtonAlert} color='black'/>
      </View>

    </ScrollView>
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

export default MatchingWaitDetailScreen;