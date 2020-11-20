import React from 'react';
import { TouchableOpacity, Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements';

const MatchingRequestItem = (props) => {
  const {team_name, matching_count } = props.matchingRequest;

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
        <Button style={{ fontSize: 13, padding: 15}} title="수락"  onPress={() => navigation.navigate('#') }/>
        <Text>   </Text>
        <Button style={{ fontSize: 13, marginRight: 15}} title="거절"  onPress={() => navigation.navigate('#') }/>
      </View>
      
    </TouchableOpacity>
    
  );
};

export default MatchingRequestItem;