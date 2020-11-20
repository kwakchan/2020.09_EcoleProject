import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';

const MatchingItem = (props) => {
  const  navigation  = props.navigation;
  const {id, team_name, matching_location, matching_time, matching_count } = props.matching;
  
  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", margin: 5, justifyContent: "space-between" }}
                      onPress={() => { navigation.navigate('MatchingWaitDetail', 
                                      {id: id, team_name: team_name, matching_location: matching_location, matching_time: matching_time,matching_count: matching_count});
                                     }}
    >
      <Avatar size="medium" rounded title={team_name.substring(0,1)} containerStyle={{ backgroundColor: "gray" }} />
      <View>  
        <Text style={{ fontSize: 17, marginLeft: 5, fontWeight: 'bold' }}>{team_name}</Text>
      </View>       
      <View style={{flexDirection: "column", alignItems: "flex-end"}}>
        <Text style={{ fontSize: 15}}>{matching_time}</Text>
        <Text style={{ fontSize: 15}}>{matching_location}</Text>
        <Text style={{ fontSize: 15}}>{matching_count}</Text>
      </View>
    </TouchableOpacity>
    
  );
};

export default MatchingItem;