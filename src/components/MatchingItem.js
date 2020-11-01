import React from 'react';
import { Text, Button, View } from 'react-native';
import { Avatar } from 'react-native-elements';

const MatchingItem = (props) => {
  const {team_name, matching_location, matching_time, matching_count } = props.matching;

  return (
    <View style={{ flexDirection: "row", alignItems: "center", margin: 5, justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row", alignItems: "center"}}>
        <Avatar size="medium" rounded title={name.substring(0,1)} containerStyle={{ backgroundColor: "gray" }} />
        <Text style={{ fontSize: 20, marginLeft: 5 }}>{team_name}</Text>
        <Text style={{ fontSize: 20, marginLeft: 5 }}>{matching_location}</Text>
        <Text style={{ fontSize: 20, marginLeft: 5 }}>{matching_time}</Text>
        <Text style={{ fontSize: 20, marginLeft: 5 }}>{matching_count}</Text>
        <Button title="상세보기" onPress={() => navigation.navigate('#') }/>
      </View>
    </View>
  );
};

export default MatchingItem;
