import React from 'react';
import { TouchableOpacity, Text, View, Button, Alert } from 'react-native';
import { Avatar } from 'react-native-elements';

const MatchingRequestItem = (props) => {
  const {team_name, matching_count } = props.matchingRequest;

  const acceptalert = () => {
  
    Alert.alert(
      "신청 수락",
      "매칭신청을 수락하시겠습니까?",
      [
        {
          text: "취소",
          onPress: () => console.log("수락 취소"),
          style: "cancel"
        },
        { text: "확인", onPress: () => console.log(team_name + "팀과의 매칭이 성사되었습니다.") }
      ],
      { cancelable: false }
    );
  }
  const rejectalert = () =>
    Alert.alert(
      "신청 거절",
      "매칭신청을 거절하시겠습니까?",
      [
        {
          text: "취소",
          onPress: () => console.log("거절 취소"),
          style: "cancel"
        },
        { text: "확인", onPress: () => console.log(team_name + "팀과의 매칭이 거절되었습니다.") }
      ],
      { cancelable: false }
    );

  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", margin: 5, justifyContent: "space-between"}}
                            // onPress={() => navigation.navigate('#') }
    >
      
      <View style={{ flexDirection: "row", alignItems: "center"}}>
        <Avatar size="medium" rounded title={team_name.substring(0,1)} containerStyle={{ backgroundColor: "gray" }} />
        <Text style={{ fontSize: 17, marginLeft: 15, fontWeight: 'bold'}}>{team_name}</Text>
        
      </View>
      
      <View style={{ flexDirection: "row", alignItems: "center"}}>
        <Text style={{ fontSize: 13, marginRight: 15}}>{matching_count}</Text>
        <Button style={{ fontSize: 13, padding: 15}} title="수락" color="#4c75c0" onPress={acceptalert}/>
        <Text>   </Text>
        <Button style={{ fontSize: 13, marginRight: 15}} title="거절" color="gray" onPress={rejectalert}/>
      </View>
      
    </TouchableOpacity>
    
  );
};

export default MatchingRequestItem;