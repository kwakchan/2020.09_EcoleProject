import React, {useState} from "react";
import { Text, Image, View, StyleSheet, Button, Alert} from "react-native";
import { ListItem, Icon } from 'react-native-elements'
import { ScrollView } from "react-native-gesture-handler";

const MatchingDetailScreen = ({route, navigation}) => {
  const { id, homeTeam_id, name, logoPath, state, district, date, countMember, description, matchStatus } = route.params;
  const [showbtn, setShowbtn ] = useState(false)
  const list = [
    {
      title: '시간',
      icon: 'event',
      text: date
    },
    {
      title: '장소',
      icon: 'room',
      text: state + district
    },
    {
      title: '인원',
      icon: 'group',
      text: countMember
    },
    {
      title: '설명',
      icon: 'info',
      text: description   
    }
  ]

  const deleteButtonAlert = () =>
    Alert.alert(
      "매칭 삭제",
      "매칭 진행중인 경기를 삭제하시겠습니까?",
      [
        {
          text: "취소",
          onPress: () => console.log("매칭 삭제 취소"),
          style: "cancel"
        },
        { text: "확인", onPress: () => console.log("매칭 삭제 완료") }
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
          onPress: () => console.log("매칭 신청 취소"),
          style: "cancel"
        },
        { text: "확인", onPress: () => console.log("매칭 신청 완료") }
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
          onPress: () => console.log("매칭 신청 유지"),
          style: "cancel"
        },
        { text: "확인", onPress: () => console.log("매칭 신청 취소 완료") }
      ],
      { cancelable: false }
    );

  return (
    <ScrollView style={styles.background}>

      {/* 수정/삭제 버튼 */}
      <View style={styles.udbutton} >
        <Button
          onPress={() => {navigation.navigate('MatchingModify',
            {id: id, homeTeam_id: homeTeam_id, name: name, logoPath: logoPath, state: state, district: district, 
             date: date, countMember: countMember, description: description, matchStatus: matchStatus}); 
            }}
          title="수정"
          color="gray"
          type="outline"
        />
        <Button
          onPress={deleteButtonAlert}
          title="삭제"
          color="#de3143"
          type="outline"
        />
      </View>

      {/* 팀로고(이미지) + 팀이름(텍스트) */}
      <View style={styles.teamprofile}>
        <Image source={{ uri: logoPath }} style={{width:100, height:100, borderRadius: 150/2}}
        />
        <View style={{flexDirection:'column'}}>
          <Text styles={styles.teamname} style={{fontSize:20}}>{name}</Text>
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
        {
          showbtn === false
          ? <>
          <Button
            onPress={requestButtonAlert}
            title="신청"
          />
          <Button
          onPress={cancelButtonAlert}
          title="취소"
          disabled
          />
          </>

          : <>
          <Button
            onPress={requestButtonAlert}
            title="신청"
            disabled
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
    margin: 30
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