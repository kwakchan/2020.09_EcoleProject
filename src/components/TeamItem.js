import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';

const TeamItem = (props) => {
  const  navigation  = props.navigation;
  const {id, name, logopath, state, district, description, owner} = props.team;
  const ownerName = owner.name;
  
  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", margin: 5, justifyContent: "space-between" }}
                      onPress={() => {navigation.navigate('TeamDetail', 
                        {id: id, name: name, logopath: logopath, state: state, district: district,
                          description:description, ownerName: ownerName
                        }); 
                      }}
    >
      <Avatar size="medium" rounded source={{ uri: logopath}} containerStyle={{ backgroundColor: "gray" }} />
      <View>
        <Text style={{ fontSize: 17, marginLeft: 5, fontWeight: 'bold' }}>{name}</Text>
      </View>
      <View style={{flexDirection: "column", alignItems: "flex-end"}}>
        <Text style={{ fontSize: 15}}>{state}</Text>
        <Text style={{ fontSize: 15}}>{district}</Text>
        <Text style={{ fontSize: 15}}>{ownerName}</Text>
      </View>
    </TouchableOpacity>
    
  );
};

export default TeamItem;