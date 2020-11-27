import React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { Avatar } from 'react-native-elements';


const acceptalert = () =>
  Alert.alert(
    "신청 수락",
    "새로운 멤버 요청을 수락하시겠습니까?",
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

const rejectalert = () =>
  Alert.alert(
    "신청 거절",
    "새로운 멤버 요청을 거절하시겠습니까?",
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



const RequestMemberItem = (props) => {
  const { id, name, image } = props.requestmember;

  return (
    <View style={{ flexDirection: "row", alignItems: "center", margin: 5, justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Avatar size="medium" rounded title={image} containerStyle={{ backgroundColor: "gray" }} />
        <Text style={{ fontSize: 20, marginLeft: 5 }}>{name}</Text>
      </View>
      <View style={{flexDirection:'row'}}> 
        <Button title="수락" onPress={acceptalert} color="#EDD81C" />
        <Button title="거절" onPress={rejectalert} color="#EDD81C" />
      </View>
      {/*<Text style={{ fontSize: 15, fontWeight: "700" }}>{team ? team.name : "No Team"}</Text>*/}
    </View>
  );
};

export default RequestMemberItem;