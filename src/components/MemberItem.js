import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';

const MemberItem = (props) => {
  const {id, name, team } = props.member;

  return (
    <View style={{ flexDirection: "row", alignItems: "center", margin: 5, justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row", alignItems: "center"}}>
        <Avatar size="medium" rounded title={name.substring(0,1)} containerStyle={{ backgroundColor: "gray" }} />
        <Text style={{ fontSize: 20, marginLeft: 5 }}>{name}</Text>
      </View>
      <Text style={{ fontSize: 15, fontWeight: "700" }}>{team ? team.name : "No Team"}</Text>
    </View>
  );
};

export default MemberItem;
