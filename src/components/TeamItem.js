import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';

const TeamItem = (props) => {
  const  navigation  = props.navigation;
  const {team_name, team_location, team_birth, team_count } = props.team;

  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", margin: 5, justifyContent: "space-between" }}
                      onPress={() => {navigation.navigate('TeamDetail', {team_name: team_name}); 
                      }}
    >
      <Avatar size="medium" rounded title={team_name.substring(0,1)} containerStyle={{ backgroundColor: "gray" }} />
      <View>
        <Text style={{ fontSize: 17, marginLeft: 5, fontWeight: 'bold' }}>{team_name}</Text>
      </View>
      <View style={{flexDirection: "column", alignItems: "flex-end"}}>
        <Text style={{ fontSize: 15}}>{team_location}</Text>
        <Text style={{ fontSize: 15}}>{team_birth}</Text>
        <Text style={{ fontSize: 15}}>{team_count}</Text>
      </View>
    </TouchableOpacity>
    
  );
};

export default TeamItem;