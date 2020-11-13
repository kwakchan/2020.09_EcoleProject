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
    text: '먼저 연락오는 분이랑 바로할게요 먼저 연락오는 분이랑 바로할게요 먼저 연락오는 분이랑 바로할게요 먼저 연락오는 분이랑 바로할게요 먼저 연락오는 분이랑 바로할게요 먼저 연락오는 분이랑 바로할게요 먼저 연락오는 분이랑 바로할게요 먼저 연락오는 분이랑 바로할게요'
  }
]

const MatchingDetailScreen = () => {

  const deleteButtonAlert = () =>
    Alert.alert(
      "매칭 삭제",
      "매칭 진행중인 경기를 삭제하시겠습니까?",
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

  const requestButtonAlert = () =>
    Alert.alert(
      "매칭 신청",
      "해당 경기에 매칭을 신청하시겠습니까?",
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

  const cancelButtonAlert = () =>
    Alert.alert(
      "매칭 취소",
      "해당 경기에 매칭을 취소하시겠습니까?",
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

      {/* 수정/삭제 버튼 */}
      <View style={styles.udbutton} >
        <Button
          title="수정"
          type="outline"
        />
        <Button
          onPress={deleteButtonAlert}
          title="삭제"
          type="outline"
        />
      </View>

      {/* 팀로고(이미지) + 팀이름(텍스트) */}
      <View style={styles.teamprofile}>
        <Image source={{uri: 'http://placeimg.com/100/100'}} style={{width:100, height:100, borderRadius: 150/2}}
        />
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
                <ListItem.Subtitle >{item.text}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </View>

      {/* 신청/취소 버튼 */}
      <View style={styles.oxbutton}>
        <Button
          onPress={requestButtonAlert}
          title="신청"
          type="outline"
        />
        <Button
          onPress={cancelButtonAlert}
          title="취소"
          disabled
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  udbutton: {
    flexDirection:'row',
    position:'absolute',
    top:20,
    right:20
  },
  oxbutton: {
    marginTop:30,
    marginBottom:30
  }
});

export default MatchingDetailScreen;