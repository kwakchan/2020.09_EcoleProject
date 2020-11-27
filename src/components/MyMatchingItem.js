import React from 'react';
import { TouchableOpacity, Text, Button } from 'react-native';

const MyMatchingItem = (props) => {
  const  navigation  = props.navigation;
  const { team_name, matching_location, matching_time, matching_count, matching_contents } = props.myMatching;

  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", margin: 5, justifyContent: "space-between"}}
                      onPress={() => {navigation.navigate('MatchingDetail',{team_name: team_name, matching_location: matching_location, matching_time: matching_time, matching_count: matching_count, matching_contents: matching_contents}); }}
    >
        <Text style={{ fontSize: 15, marginLeft: 5 }}>{matching_time}</Text>
        <Text style={{ fontSize: 15, marginLeft: 5 }}>{matching_location}</Text>
        <Text style={{ fontSize: 15, marginLeft: 5 }}>{matching_count}</Text>
    
        <Button title="요청목록"  onPress={() => navigation.navigate('MatchingRequest') }/>
    </TouchableOpacity>
  );
};

export default MyMatchingItem;