import React from 'react';
import { TouchableOpacity, Text, Button, View } from 'react-native';
import { Avatar } from 'react-native-elements';

const MyMatchingItem = (props) => {
  const {team_name, matching_location, matching_time, matching_count } = props.myMatching;

  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", margin: 5, justifyContent: "space-between"}}
                            // onPress={() => navigation.navigate('#') }
    >
        <Avatar size="medium" rounded title={team_name.substring(0,1)} containerStyle={{ backgroundColor: "gray" }} />
        <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: 'bold' }}>{team_name}</Text>
        <Text style={{ fontSize: 15, marginLeft: 5 }}>{matching_location}</Text>
        <Text style={{ fontSize: 15, marginLeft: 5 }}>{matching_time}</Text>
        <Text style={{ fontSize: 15, marginLeft: 5 }}>{matching_count}</Text>
        
        <Button title="수정"  onPress={() => navigation.navigate('#') }/>
    </TouchableOpacity>
  );
};

export default MyMatchingItem;