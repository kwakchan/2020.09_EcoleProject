import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';

const MatchingItem = (props) => {
  const navigation = props.navigation;
  const { id, homeTeam, state, district, date, countMember } = props.matching;
  const name = homeTeam.name;
  const logoPath = homeTeam.logopath;
  const description = homeTeam.description

  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", margin: 5, justifyContent: "space-between" }}
      onPress={() => {
        navigation.navigate('MatchingDetail',
          { id: id, name: name, logoPath: logoPath, state: state, district: district, date: date, countMember: countMember, description: description });
      }}
    >
      <Avatar size="medium" rounded source={{ uri: logoPath }} containerStyle={{ backgroundColor: "gray" }} />
      <View>
        <Text style={{ fontSize: 17, marginLeft: 5, fontWeight: 'bold' }}>{name}</Text>
      </View>
      <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
        <Text style={{ fontSize: 15 }}>{date}</Text>
        <Text style={{ fontSize: 15 }}>{state} {district}</Text>
        <Text style={{ fontSize: 15 }}>{countMember}</Text>
      </View>
    </TouchableOpacity>

  );
};

export default MatchingItem;