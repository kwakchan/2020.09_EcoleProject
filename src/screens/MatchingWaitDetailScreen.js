import React from "react";
import { Text, Image, View, StyleSheet, Button, Alert } from "react-native";

const MatchingWaitDetailScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "매칭신청 수락",
      "FC바르셀로나 팀과의 매칭이 수락되었습니다",
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
      "FC바르셀로나 팀과의 매칭이 거절되었습니다",
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
    <View>

      {/* 팀로고(이미지) + 팀이름(텍스트) */}
      <View style={styles.container}>
        <Image source={require('../img/carthegarden.png')} style={{width:100, height:100}} />
        <View style={{flexDirection:'column'}}>
          <Text styles={styles.teamname}>FC미슛가루</Text>
        </View>
      </View>

      {/* 상세내용 */}
      <View style={{flexDirection:'row'}}>
        <Text style={styles.section}>시간 : </Text>
        <Text style={styles.detail}>12월 32일 금요일 오후 10:00</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.section}>장소 : </Text>
        <Text style={styles.detail}>스포원파크 축구장</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.section}>인원 : </Text>
        <Text style={styles.detail}>11명</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.section}>설명 : </Text>
        <Text style={styles.detail}>먼저 연락주신 분이랑 바로 뛸게요 빨리 연락 고고공</Text>
      </View>

      {/* 수락/거절 버튼 */}
      <View style={styles.button}>
        <Button title={"수락"} onPress={createTwoButtonAlert} />
        <Button title={"거절"} onPress={createThreeButtonAlert} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginLeft:20,
    flexDirection:'row'
  },
  teamname: {
    marginLeft:10
  },
  section: {
    fontWeight:'bold',
    fontSize:15
  },
  detail: {
    marginLeft:10
  },
  button: {
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default MatchingWaitDetailScreen;