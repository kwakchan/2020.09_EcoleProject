import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const BoardItem = (props) => {
  const  navigation  = props.navigation;
  const {id, title, name, content, createdAt, modifiedAt, boardType, comments } = props.board;
  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", margin: 5, justifyContent: "space-between"}}
                      onPress={() => {navigation.navigate('BoardDetail', 
                                          {id: id, title: title, name: name, content: content, 
                                            createdAt: createdAt, modifiedAt: modifiedAt, boardType: boardType 
                                          }); 
                      }}
    >
      {/* <Avatar size="medium" rounded title={team_name.substring(0,1)} containerStyle={{ backgroundColor: "gray" }} /> */}
      <View style={{flexDirection: "column", alignItems: "center"}}>
        <Text style={{ fontSize: 15}}>{boardType}</Text>
        <Text style={{ fontSize: 15}}>{createdAt}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 17, marginLeft: 5, fontWeight: 'bold' }}>{title}</Text>
      </View>
      <Text style={{ fontSize: 15}}>{name}</Text>
    </TouchableOpacity>
    
  );
};

export default BoardItem;