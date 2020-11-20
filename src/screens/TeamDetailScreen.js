import React from "react";
import { Text, Image, View, StyleSheet, Alert} from "react-native";
import { Button } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

import Icon from 'react-native-vector-icons/FontAwesome';

const TeamDetailScreen = ({navigation}) => {

  const applyButtonAlert = () =>
    Alert.alert(
      "팀 가입 신청",
      "FC미슛가루 팀 가입을 신청하시겠습니까?",
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
      "팀 가입 취소",
      "FC미슛가루 팀 가입을 취소하시겠습니까?",
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
      <View style={styles.teamprofile}>
        <Image source={{uri: 'http://placeimg.com/100/100',}} style={{width:100, height:100, borderRadius: 150/2}} />
        <View style={{flexDirection:'column'}}>
          <Text styles={styles.teamname} style={{fontSize:20}}>FC미슛가루</Text>
        </View>
      </View>

      {/* 멤버 목록 페이지로 이동하는 버튼 */}
      <View>
        <Button
          onPress={() => {}}
          icon={
            <Icon
              name="user"
              size={30}
              color='white'
            />
          }
          title="  Enter to MemberList"
          onPress={() => {
            navigation.navigate('TeamMember');
          }}
        />
      </View>

      {/* 신청/취소 버튼 */}
      <View style={styles.oxbutton}>
        <Button 
          onPress={applyButtonAlert}
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