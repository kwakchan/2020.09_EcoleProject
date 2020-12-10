import React from 'react';
import { TouchableOpacity, Text, View, Button, Alert } from 'react-native';
import { Avatar } from 'react-native-elements';
import { api } from '../api';
import AsyncStorage from "@react-native-async-storage/async-storage";

const MatchingRequestItem = (props) => {
  const {id, team_name, matching_count } = props.matchingRequest;

  async function putRequest(teamStatus, id) {
    try {
      const token = await AsyncStorage.getItem("token");
      const config = {
        headers: {
          Authorization: token
        }
      }
      const res = await api.put(`/api/matches/${id}/home/${applyteam}`, teamStatus, config);
    } catch (error) {
      console.log(error)
    }
  }

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
        <Button style={{ fontSize: 13, padding: 15}} title="수락" color="#4c75c0"
          onPress={() => { putRequest({teamStatus : "ACCEPT"}, id) }}/>
        <Text>   </Text>
        <Button style={{ fontSize: 13, marginRight: 15}} title="거절" color="gray"
          onPress={() => { putRequest({teamStatus : "REJECT"}, id) }}/>
      </View>
      
    </TouchableOpacity>
    
  );
};

export default MatchingRequestItem;