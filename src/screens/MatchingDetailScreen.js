import React from "react";
import { Text, Image, View, StyleSheet, Button, Alert} from "react-native";
import { ListItem, Icon } from 'react-native-elements'
import { ScrollView } from "react-native-gesture-handler";

const MatchingDetailScreen = ({route, navigation}) => {
  const { team_name, matching_location, matching_time, matching_count, matching_contents } = route.params;
  const list = [
    {
      title: '시간',
      icon: 'event',
      text: JSON.stringify(matching_time)
    },
    {
      title: '장소',
      icon: 'room',
      text: JSON.stringify(matching_location)
    },
    {
      title: '인원',
      icon: 'group',
      text: JSON.stringify(matching_count)
    },
    {
      title: '설명',
      icon: 'info',
      text: JSON.stringify(matching_contents)   
    }
  ]

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
          <Text styles={styles.teamname} style={{fontSize:20}}>{JSON.stringify(team_name)}</Text>
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
          onPress={() => {
            console.log(JSON.stringify(team_name)+"팀에게 매칭신청을 하였습니다.");
            navigation.navigate('MatchingDetail');
          }}
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